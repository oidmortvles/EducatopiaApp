import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cookieStore = await cookies()
    const access_token = cookieStore.get('access_token')?.value;
    const userCookie = cookieStore.get('user')?.value;

    
    if (!access_token || !userCookie) {
      return NextResponse.json(
        { error: 'Faltan cookies necesarias' },
        { status: 401 }
      );
    }

    
    const params = new URLSearchParams({ modelName: 'Tag' });
    const URL = `${process.env.API_URL}/private/models?${params.toString()}`;

    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.HEADER_FETCH}`,
        'Cookie': `access_token=${access_token}`,
      },
      // Importante: evitar caché si se espera respuesta dinámica
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(response);
      return NextResponse.json(
        { error: 'Fallo la consulta de Grupos' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en getForums:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
