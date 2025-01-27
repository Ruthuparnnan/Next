"use client";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

function Error({ error, reset }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <Typography
      onClick={reload}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
        color: "red",
      }}
    >
      Error or wot please come next monday{error?.message}
    </Typography>
  );
}

export default Error;
