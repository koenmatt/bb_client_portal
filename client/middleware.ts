import { NextRequest, NextResponse } from 'next/server';
import { getSession, updateSession } from './lib/cookies';

export async function middleware(request: NextRequest) {

    await updateSession(request);

    const session = await getSession();
    const { pathname } = request.nextUrl;

    
    if (session && !(pathname.startsWith('/dashboard') || pathname.startsWith('/demo-accounts') || pathname.startsWith('/sales-material') || pathname.startsWith('/content-library'))) {
        console.log("REDIREDT")
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }

      if (!session && !(pathname === '/' || pathname.startsWith('/create'))) {
        console.log("Redirect to /");
        return NextResponse.redirect(new URL('/', request.url));
    }

}

export const config = {
    matcher: [
        '/',
        '/create',
        '/dashboard',
        '/demo-accounts',
        '/sales-material',
        '/content-library'
        
]
}