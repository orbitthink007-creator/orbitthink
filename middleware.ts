import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from '@/lib/auth';

export async function middleware(req: NextRequest) {
    // Protect /admin routes, but exclude /admin/login and /admin/register
    if (req.nextUrl.pathname.startsWith('/admin')) {
        if (req.nextUrl.pathname === '/admin/login' || req.nextUrl.pathname === '/admin/register') {
            return NextResponse.next();
        }

        const token = req.cookies.get('admin_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', req.url));
        }

        const payload = await verifyJWT(token);

        if (!payload) {
            return NextResponse.redirect(new URL('/admin/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
