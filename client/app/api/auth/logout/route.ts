import { logout } from '@/lib/cookies';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    await logout();

    return NextResponse.json({
        message: "Successfully logged out",    
    }, {status: 200})

}