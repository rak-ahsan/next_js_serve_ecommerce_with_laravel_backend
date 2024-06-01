// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token");

//   if (!token && request.nextUrl.pathname !== "/login") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (token && request.nextUrl.pathname === "/login") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const role = request.cookies.get("role")?.value;

  // Redirect to login if no token and not already on the login page
  if (!token && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }


  if (
    !request.nextUrl.pathname.startsWith("/user") &&
    !request.nextUrl.pathname.startsWith("/admin")
  ) {
    return NextResponse.next();
  }

  if (role === "admin" && !request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/home", request.url));
  }

  if (role === "editor" && !request.nextUrl.pathname.startsWith("/editor")) {
    return NextResponse.redirect(new URL("/editor", request.url));
  }

  if (
    role !== "admin" &&
    role !== "editor" &&
    !request.nextUrl.pathname.startsWith("/user")
  ) {
    return NextResponse.redirect(new URL("/user/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
