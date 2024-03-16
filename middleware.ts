import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const tokenAll = cookieStore.get("token");
  const token = tokenAll?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login).*)"],
};
