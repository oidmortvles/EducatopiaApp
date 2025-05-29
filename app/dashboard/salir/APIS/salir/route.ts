"use server"
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(){
    try{
        const response = NextResponse.json({ 
            message:'Sesión cerrada correctamente',
            status: "success",
        })

        //=> ELIMINA LA COOKIE
        const cookieStore = await cookies();
        cookieStore.delete('access_token');
        cookieStore.delete('user');

        return response;


    }catch(error){
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
}