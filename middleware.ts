import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export default async function middleware(request: NextRequest) {

    const cookieStore = await cookies();
    const accessToken  = cookieStore.get('access_token')?.value;
    const validToken = typeof accessToken === 'string' && accessToken.trim().length > 0;

    const pathname = request.nextUrl.pathname;    
    const publicOnlyRoutes = ['/login', '/register']; //==> RUTAS PERMITIDAS SIN TOKEN
    
    if (publicOnlyRoutes.includes(pathname)) {
      if (validToken) {
        return NextResponse.redirect(new URL('/dashboard/perfil', request.url));
      }
      return NextResponse.next(); 
    }//=> RUTAS PERMITIDAS SIN TOKEN 

    
    if (pathname.startsWith('/dashboard') && !validToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    } //=> PROTEGE RUTAS PRIVADAS
  

    return NextResponse.next();
}
 
export const config = {
  matcher: ['/dashboard','/dashboard/(.*)','/login','/register',],
}