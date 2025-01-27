"use client";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function DynamicLogoutButtonPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Button role="logout-btn" variant="contained" color="primary">
          Log out
        </Button>
      ) : (
        <div>Please login...</div>
      )}
    </>
  );
}

export default DynamicLogoutButtonPage;
