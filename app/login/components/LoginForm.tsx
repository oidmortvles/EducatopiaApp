/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Input from '@/app/components/Input';
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import ButtonAction from '@/app/components/ButtonAction';

const LoginForm : React.FC = () =>{

    const {register, handleSubmit, formState:{errors}, reset} = useForm();


    /* VALIDADOR DE CAMPO */
    const usernameValidator= {
        required:{value:true, message:"El Usuario es requerido"},
        minLength:{value:4, message:"El campo debe tener al menos 4 caracteres"},
        maxLength:{value:12, message:"El campo debe tener menos de 12 caracteres"}, 
        pattern:{value:/^[a-zA-Z0-9.\-_]+$/, message:"Revise los caracteres ingresados"},           
    };  

    const passwordValidator= {
        required:{value:true, message:"La Contraseña es requerido"},
        minLength:{value:6, message:"El campo debe tener al menos 6 caracteres"},
        maxLength:{value:15, message:"El campo debe tener menos de 15 caracteres"},
        pattern:{value:/^[a-zA-Z0-9.\-_]+$/, message:"Revise los caracteres ingresados"},             
    }


    //ENVIAR FORMULARIO
    const loginFormEnviar = async (datos:any) =>{        
        const loginData = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)        
        }
        console.log(loginData)
        reset();
    }



    return(
        <form className={styles.loginForm} onSubmit={handleSubmit(loginFormEnviar)}>
            <header className={styles.header}>
                <h1>Inicio de Sesión</h1>
                <p>Accedé a todo el contenido y curaduria de <span>Educatopia</span></p>
            </header>

            
            <div className={styles.inputsContainer}>
                <Input type={"text"}  name={"usernameLogin"} id={"usernameLogin"} title={"Ingrese su Usuario"} register={register} validator={usernameValidator} warnings={errors.usernameLogin}/>
                <Input type={"password"} name={"passwordLogin"} id={"passwordLogin"} title={"Ingrese su Contraseña"} register={register} validator={passwordValidator} warnings={errors.passwordLogin}/>            
                <ButtonAction colorSet={1} text='Iniciar Sesión' type='submit' />
            </div>           
        </form>
    )
}


export default LoginForm;