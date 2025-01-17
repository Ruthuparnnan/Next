"use client";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------
function NotFound() {
  const pathname = usePathname();
  const data = pathname?.split("/")[1];
  console.log("DHD", data);
  return (
    <Container>
      <Typography>NOt found just go to hello</Typography>
      <Button color="error" variant="contained">
        Go to home {data}
      </Button>
    </Container>
  );
}

export default NotFound;
