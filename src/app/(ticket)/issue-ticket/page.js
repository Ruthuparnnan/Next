"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const naviageToLogin = () => router.push("/auth/login");

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Click this button for raising a ticket.</h1>
      {/* <Link href="/auth/login"> */}
      <Button
        startIcon="🙏"
        variant="contained"
        color="error"
        onClick={naviageToLogin}
      >
        Raise Ticket
      </Button>
      {/* </Link> */}
    </div>
  );
}
