/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import styles from './LoginForm.module.css';
import { useEffect } from 'react';
import Input from '@/app/components/Input';
import ButtonAction from '@/app/components/ButtonAction';
import { useRouter } from 'next/navigation'
import { usePost } from '@/app/utilities/usePost';
import { useForm } from 'react-hook-form';
import useAlert from '@/app/storage/alerts';

const LoginForm : React.FC = () =>{

    const {register, handleSubmit, formState:{errors}, reset} = useForm(); //=> MANEJAR FORM
    const {data, loading, fetchData} = usePost(); //=> HACER PETICION
    const {addAlert} = useAlert(); //=> MOSTRAR NOTIFICACION
    const router = useRouter(); //=> REDIRIJIR A OTRA PAGINA


    useEffect(() => {
        if (data) {
          addAlert(data); //=> SI HAY RESPUESTA LA AGREGA A NOTIFICACIONES          
          data.status === "success" && router.push('/dashboard/perfil'); //=> SI EL LOG ES CORRECTO REDIRIJE A /PERFIL
        }
      }, [data]);



    /* VALIDADOR DE CAMPO */
    const emailValidator= {
        required: {value:true, message:"Email es requerido"},
        maxLength:{value:30, message:"Máximo 30 caracteres"}, 
        pattern:{value:/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, message:"Ingrese un correo valido"},
      };

    const passwordValidator= {
        required:{value:true, message:"La Contraseña es requerida"},
        minLength:{value:6, message:"El campo debe tener al menos 6 caracteres"},
        maxLength:{value:15, message:"El campo debe tener menos de 15 caracteres"},
        pattern:{value:/^[a-zA-Z0-9ñÑ._-]+$/, message:"Revise los caracteres ingresados"},             
    }


    //ENVIAR FORMULARIO
    const loginFormEnviar = (datos:any) =>{ 
        fetchData("/login/APIS/login", datos) ;             
        reset();
    }



    return(
        <form className={styles.loginForm} onSubmit={handleSubmit(loginFormEnviar)}>
            <header className={styles.header}>
                <h1>Inicio de Sesión</h1>
                <p>Accedé a todo el contenido y curaduria de <span>Educatopia</span></p>
            </header>

            
            <div className={styles.inputsContainer}>
                <Input type={"text"}  name={"emailLogin"} id={"emailLogin"} title={"Ingrese su Usuario"} register={register} validator={emailValidator} warnings={errors.emailLogin}/>
                <Input type={"password"} name={"passwordLogin"} id={"passwordLogin"} title={"Ingrese su Contraseña"} register={register} validator={passwordValidator} warnings={errors.passwordLogin}/>            
                <ButtonAction colorSet={1} text='Iniciar Sesión' type='submit' deshabilitado={loading} loader={loading} />
            </div>           
        </form>
    )
}


export default LoginForm;