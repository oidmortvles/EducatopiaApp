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

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request: NextRequest) {
        try {

            const cookiesStore = await cookies()
            const access_token= cookiesStore.get('access_token')?.value;
            
            //VERIFICA LAS COOKIES
            if (!access_token) {
                throw new Error("Faltan cookies necesarias");
            }

            // => PARSEA EL FORM DATA ENTRANTE
    const formData = await request.formData();

    // => CONSTRUYE UN NUEVO FormData PARA reenviar (importante!)
    const newFormData = new FormData();

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // => Es un archivo
        newFormData.append(key, value, value.name);
      } else {
        // => Es un string / campo simple
        newFormData.append(key, value);
      }
    }

    // DEBUG opcional: mostrar contenido
    for (const [key, value] of newFormData.entries()) {
      if (value instanceof File) {
        console.log(`📎 Archivo: ${key} (${value.name})`);
      } else {
        console.log(`📝 Campo: ${key} = ${value}`);
      }
    }
       
    
            

            const URL =`${process.env.API_URL}/private/posts`;

            const res = await fetch(URL,{
                method: 'POST',
                headers: {
                    'x-api-key': `${process.env.HEADER_FETCH}`,
                    'Cookie': `access_token=${access_token}`,
                },
                body: newFormData,
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