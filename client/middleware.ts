import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || "";
    const parts = hostname.split('.')

    if (parts.length > 1 && parts[0] !== 'www' && parts[0] !== 'localhost') {
        const projectId = parts[0];
        const path = request.nextUrl.pathname

        const rewriteUrl = new URL('/api/s3-proxy', request.url);
        const response = NextResponse.rewrite(rewriteUrl);
        response.headers.set('x-project-id', projectId);
        response.headers.set('x-path', path);
        return response;
    }
    else {
        return NextResponse.next();
    }

}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
