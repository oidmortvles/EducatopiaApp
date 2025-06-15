import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const transformData = (data:any) => {
  return {
    Title: data.Title,
    Description: data.Description,
    Content: data.Content,
    Tags: 3,
    Forums: data.Forums,
    Audiovisuals: data.Audiovisuals,
    ActivityID: 2,
  };
};

export async function POST(request: NextRequest) {
        try {

            const cookiesStore = await cookies()
            const access_token= cookiesStore.get('access_token')?.value;

            const dataPost = await request.json();
            const formattedData  = transformData(dataPost);
            
            //VERIFICA LAS COOKIES
            if (!access_token) {
                throw new Error("Faltan cookies necesarias");
            }

            const URL =`${process.env.API_URL}/private/posts`;

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