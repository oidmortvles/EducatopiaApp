// utils/setAccessTokenCookie.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function cookieSet(request: NextRequest, response: NextResponse, accessToken: string) {
  const secureConnection = request.headers.get('x-forwarded-proto') === 'https' || request.nextUrl.protocol === 'https:';  
  response.cookies.set('access_token', accessToken);

  return response;
}
