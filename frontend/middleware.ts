import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const shouldRedirectToLogin = !token && request.nextUrl.pathname !== "/login";
  const shouldRedirectAwayFromLogin = token && request.nextUrl.pathname === "/login";

  if (shouldRedirectToLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (shouldRedirectAwayFromLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
