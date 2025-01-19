"use client";
import { DashboardContext } from "../context/context";

function Layout({ notifications, analytics, children }) {
  const data = { name: "Admin", email: "admin@gmail.com" };
  return (
    <DashboardContext value={data}>
      {children}
      {notifications}
      {analytics}
    </DashboardContext>
  );
}

export default Layout;
