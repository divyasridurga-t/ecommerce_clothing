import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let { name = "", value: token }: any = request.cookies.get("token") || {};
  let currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith("/backoffice") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/backoffice/:path", "/backoffice"],
};
