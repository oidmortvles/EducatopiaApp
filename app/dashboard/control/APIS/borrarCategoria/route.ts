import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE(request: NextRequest) {
        try {
            const cookiesStore = await cookies()
            const access_token= cookiesStore.get('access_token')?.value;

            const body = await request.json();
            const { TagID } = body;
            
            //VERIFICA LAS COOKIES
            if (!access_token) {
                throw new Error("Faltan cookies necesarias");
            }

            const URL =`${process.env.API_URL}/private/tags/${TagID}`;

            const res = await fetch(URL,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json', 
                    'x-api-key': `${process.env.HEADER_FETCH}`,
                    'Cookie': `access_token=${access_token}`,
                },
            });   
            
            const responseBody = await res.json();
            const response = NextResponse.json(responseBody);
    
            
            if (!res.ok) {
              console.error("❌ Error en respuesta del servidor externo:", responseBody);
              return response;
            }

            return response;
    
    
          } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
          }      

}