import { NextRequest, NextResponse } from 'next/server';
import { getSession, updateSession } from './lib/cookies';

export async function middleware(request: NextRequest) {

    await updateSession(request);

    const session = await getSession();

    
    if (session && !request.nextUrl.pathname.startsWith('/dashboard')) {
        console.log("REDIREDT")
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }

    // if (!session && (!(request.nextUrl.pathname === '/'))) {
    //     console.log("REDIREDT")
    //     return Response.redirect(new URL('/', request.url))
    //   }


}

export const config = {
    matcher: [
        '/',
        '/create',
        '/dashboard'
]
}