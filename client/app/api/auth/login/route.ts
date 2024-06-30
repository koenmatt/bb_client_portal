import { NextResponse } from 'next/server';
import { pbkdf2Sync } from 'crypto';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

interface UserData {
    email: string,
    password_hash: string,
    access_code: string
}

function verifyPassword(password: string, hashedPassword: string): boolean {
    const [salt, originalHash] = hashedPassword.split(':');
    const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === originalHash;
  }

async function getPassword(email: string)  {
    
    const db = await open(
        {filename: './user-db.sqlite',
        driver: sqlite3.Database});
    const userData: UserData[] = await db.all('select * from User where email = ?', email)
    const allUsers = await db.all('select * from User')
    if (allUsers.length === 0) {
        console.log("NOOO")
        return ''
    }
    console.log(allUsers)
    return userData[0].password_hash
  }


export async function POST(request: Request) {

    const body = await request.json();
    console.log(body)
    const hashedPassword = await getPassword(body.email)

    if (!hashedPassword) {
        return NextResponse.json({
            message: "User doesn't exist",    
        }, {status: 401})
    }
    const isValid = verifyPassword(body.password, hashedPassword)

    if (!isValid) {
        return NextResponse.json({
            message: "Invalid Credentials",    
        }, {status: 401})
    }

    return NextResponse.json({
        message: "Login Successful",    
    }, {status: 200})

}