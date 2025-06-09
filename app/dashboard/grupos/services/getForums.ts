import { cookies } from 'next/headers'

const getForums = async() =>{

    try{
        const cookiesStore = await cookies()
        const access_token= cookiesStore.get('access_token')?.value;
        const userCookie = cookiesStore.get('user')?.value;
        
        //VERIFICA LAS COOKIES
        if (!access_token || !userCookie) {
            throw new Error("Faltan cookies necesarias");
        }

        //URL DE CONSULTA
        const params = new URLSearchParams();
        params.append('modelName', 'Forum');
        const URL = `${process.env.API_URL}/private/models?${params.toString()}`;

        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${process.env.HEADER_FETCH}`,
                'Cookie': `access_token=${access_token}`,
            }
        });

        if (!response.ok) {
            console.error(response);
            throw new Error("Fallo la consulta de Grupos");
        }

        return response.json();


    }catch(error){
        console.error('Error en getForums:', error);
        return null
    }

}


export default getForums