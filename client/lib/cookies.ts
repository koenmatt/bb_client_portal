import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.JWT_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("10 sec from now")
      .sign(key);
  }
  
  export async function decrypt(input: string): Promise<any> {
    try {
      const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
      });
      return payload;
    } catch (error) {
      // Log the error or handle it as needed
      console.error("Verification failed:", error);
  
      // Return an empty object or any default payload you want to send back when verification fails
      return {};
    }
  }

  export async function logout() {
    cookies().set("session", "", { expires: new Date(0) });
  }
  
  export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
  }
  
  export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;
  
    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000 );
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
    });
    return res;
  }
