import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const transformData = (data:any) => {
  return {
    Name: data.nameGroup,
  };
};

export async function POST(request: NextRequest) {
        try {

            const cookiesStore = await cookies()
            const access_token= cookiesStore.get('access_token')?.value;

            const dataCategory = await request.json();
            const formattedData  = transformData(dataCategory);
            
            //VERIFICA LAS COOKIES
            if (!access_token) {
                throw new Error("Faltan cookies necesarias");
            }

            const URL =`${process.env.API_URL}/private/tags`;

            const res = await fetch(URL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    'x-api-key': `${process.env.HEADER_FETCH}`,
                    'Cookie': `access_token=${access_token}`,
                },
                body: JSON.stringify(formattedData),
            });
    
            
            const responseBody = await res.json();
            const response = NextResponse.json(responseBody);
    
            
            if (!res.ok) {
              console.error("❌ Error en respuesta del servidor externo:", responseBody);
              return response;
            }

    
            //=> ACTUALIZA EL CACHE
            revalidatePath('/', 'layout');
    
            return response;
    
    
          } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
          }      

}