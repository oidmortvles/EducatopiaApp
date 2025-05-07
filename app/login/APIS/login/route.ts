"use server"
import { cookieSet } from '@/app/utilities/cookieSet';
import { revalidatePath } from 'next/cache';
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

        const responseBody = await res.json();
        const response = NextResponse.json(responseBody);
        
        if (!res.ok) {
          console.error("❌ Error en respuesta del servidor externo:", responseBody);
          return response;
        }               
        
        //=> GUARDA LA COOKIE
        cookieSet(request, response, responseBody);

        //=> ACTUALIZA EL CACHE
        revalidatePath('/', 'layout');

        return response;


      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
      }      
}