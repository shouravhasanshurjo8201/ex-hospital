import { NextResponse } from 'next/server';

export function middleware(request) {
    const user = request.cookies.get('token')?.value;
    const publicRoutes = ['/', '/About', '/Signup', '/Login'];
    const currentPath = request.nextUrl.pathname;
    if (!publicRoutes.includes(currentPath) && !user) {
        return NextResponse.redirect(new URL(`/Login?next=${currentPath}`, request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|static|favicon.ico).*)'],
};
