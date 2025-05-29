"use server"
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


// => TRANSFORMAR LOS DATOS DEL LOGIN
const transformData = (data:any) => {
  return {
    Email: data.emailLogin, 
    Password:data.passwordLogin
  };
};


// => FUNCION PARA RECIBIR LA VALIDACIÓN
export async function POST(request: NextRequest){
    
    const URL = `${ process.env.API_URL }/public/login`; // => URL contiene los datos del endpoint
    const dataLogin = await request.json();
    const formattedData  = transformData(dataLogin);
    
    try {
        const res = await fetch(URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'x-api-key': `${process.env.HEADER_FETCH}`},
            credentials: 'include',
            body: JSON.stringify(formattedData),
        });

        
        const setCookieHeader = res.headers.get('set-cookie'); //=> OBTENEMOS LA COOKIE DEL SERVIDOR
        const responseBody = await res.json();
        const response = NextResponse.json(responseBody);

        
        if (!res.ok) {
          console.error("❌ Error en respuesta del servidor externo:", responseBody);
          return response;
        }
        
        // => EXTRAER EL TOKEN DE LA COOKIE
        const match = setCookieHeader?.match(/access_token=([^;]+);/);
        const accessToken = match?.[1];

        if (!accessToken) {
          console.error("❌ No se encontró el access_token en las cookies");
          return NextResponse.json({ message: 'Token no encontrado en la respuesta' }, { status: 500 });
        }

        
        //=> GUARDAR LAS COOKIES
        const cookieToken = await cookies();
        cookieToken.set('access_token', accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24 * 7, //=> 1 SEMANA
        });


        const cookieUser = await cookies();
        cookieUser.set('user', JSON.stringify(responseBody), {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24 * 7, //=> 1 SEMANA
        });

        //=> ACTUALIZA EL CACHE
        revalidatePath('/', 'layout');

        return response;


      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
      }      
}