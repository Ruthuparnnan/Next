import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow /auth/login to proceed without redirection
  if (pathname === "/auth/login") {
    return NextResponse.next();
  }

  // Redirect all other requests to /auth/login
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: "/dashboard",
};
