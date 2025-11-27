import { NextResponse } from 'next/server';

export function proxy(request) {
  const user = request.cookies.get('token')?.value;

  const publicRoutes = ['/', '/About', '/Signup', '/Login'];
  const currentPath = request.nextUrl.pathname;

  // Public route allowed
  if (publicRoutes.includes(currentPath)) {
    return NextResponse.next();
  }

  // Private route but no user
  if (!user) {
    return NextResponse.redirect(
      new URL(`/Login?next=${currentPath}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
