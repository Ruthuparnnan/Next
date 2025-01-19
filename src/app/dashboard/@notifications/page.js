"use client";

import { useDashboardContext } from "@/app/context/useDashboardContext";

function Page() {
  const user = useDashboardContext();
  return <div>Hello 👋 {user?.name} you have 0 Notifications</div>;
}

export default Page;
