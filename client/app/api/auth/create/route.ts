import { NextResponse } from 'next/server';
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { randomBytes, pbkdf2Sync } from 'crypto';

interface CreateRequest {
    email: string,
    password: string,
    access_code: string
}

const checkAccessCode = (access_code: string) => {
    return true;
}

function generateSalt(length: number): string {
    return randomBytes(length).toString('hex');
  }
  
  // Function to hash a password
function hashPassword(password: string, salt: string): string {
    const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }


export async function POST(request: Request) {

    const body = await request.json();
    const email = body.email;
    const password = body.password;
    const access_code = body.access_code;
    const hashed_password = hashPassword(password, generateSalt(16))

    if (!checkAccessCode(access_code)) {
        return NextResponse.json({
            message: "Invalid Access Code",    
        }, {status: 401})
    }

    const db = await open(
        {filename: './user-db.sqlite',
        driver: sqlite3.Database});

    try {
        await db.run(`
        INSERT INTO User (email, password_hash, access_code)
        VALUES (?, ?, ?)
    `, [email, hashed_password, access_code])
    
    } catch (error) {
        return NextResponse.json({
            message: "User already exists",    
        }, {status: 400})
    }

    console.log({
        user: {
            email: email, 
            hashed_password: hashed_password,
            access_code: access_code
        },
        message: "Successfully created user",    
    })
    return NextResponse.json({
        user: {
            email: email, 
            hashed_password: hashed_password,
            access_code: access_code
        },
        message: "Successfully created user",    
    }, {status: 200})


}