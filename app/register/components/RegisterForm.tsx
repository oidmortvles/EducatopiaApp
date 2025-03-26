/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Input from '@/app/components/Input';
import styles from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import ButtonAction from '@/app/components/ButtonAction';

const RegisterForm : React.FC = () =>{

    const {register, handleSubmit, formState:{errors}, watch ,reset} = useForm();


    /* VALIDADOR DE CAMPO */
    const registerName ={
        required: {value:true, message:"Nombre es requerido"},
        minLength:{value:3, message:"El campo debe tener al menos 3 caracteres"},
        maxLength:{value:20, message:"Máximo 20 caracteres"}, 
        pattern:{value:/^[a-zA-ZÀ-ÿ\s]+$/ , message:"Por favor, sin caracteres especiales"}
    };
    
    const registerLastName ={
        required: {value:true, message:"Apellido es requerido"},
        minLength:{value:3, message:"El campo debe tener al menos 3 caracteres"},
        maxLength:{value:25, message:"Máximo 25 caracteres"}, 
        pattern:{value:/^[a-zA-ZÀ-ÿ\s]+$/ , message:"Por favor, sin caracteres especiales"}
    };


    const registerEmail= {
        required: {value:true, message:"Email es requerido"},
        maxLength:{value:30, message:"Máximo 30 caracteres"}, 
        pattern:{value:/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, message:"Ingrese un correo valido"},
      };


    const registerUsername= {
        required: {value:true, message:"Username es requerido"},
        minLength:{value:4, message:"El campo debe tener al menos 4 caracteres"},
        maxLength:{value:12, message:"El campo debe tener menos de 12 caracteres"},
        pattern:{value:/^[a-zA-Z0-9-_]+$/,message:"Por favor, sin caracteres especiales"}
    };


    const registerDni = {
        required: {value:true, message:"Dni es requerido"},
        minLength:{value:8, message:"Ingrese los digitos del Dni"},
        maxLength:{value:8, message:"Máximo 8 caracteres"}, 
        pattern:{value:/^\d+$/, message:"Por favor, solo números"}
    };


      const registerPass1= {
        required: {value:true, message:"Contraseña es requerida"},
        minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
        maxLength:{value:20, message:"Máximo 20 caracteres"}, 
        pattern:{value:/^[a-zA-Z0-9]+$/, message:"Por favor, sin caracteres especiales"}
      };

      const equalsPasswords = () =>{
        let pass1 = watch("registerPass1");
        let pass2 = watch("registerPass2");
        if (pass1===pass2){
            return true
        }else{
            return "Las contraseñas no coinciden"
        }
      }

      const registerPass2= {
        required: {value:true, message:"Por favor, repita su Contraseña"},
        minLength:{value:8, message:"El campo debe tener al menos 8 caracteres"},
        maxLength:{value:20, message:"Máximo 20 caracteres"}, 
        validate:equalsPasswords
      }


    //ENVIAR FORMULARIO
    const registerFormEnviar = async (datos:any) =>{        
        const loginData = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)        
        }
        console.log(loginData.body)
        reset();
    }



    return(
        <form className={styles.registerForm} onSubmit={handleSubmit(registerFormEnviar)}>
            <header className={styles.header}>
                <h1>Registrarte</h1>
                <p>Accedé a todo el contenido y curaduria de <span>Educatopia</span></p>
            </header>

            
            <section className={styles.inputsContainer}>

                <div className={styles.flexGroup}>
                    <Input type={"text"} id={"registerNombre"} name={"registerName"} title={"Ingrese su Nombre"} register={register} validator={registerName} warnings={errors.registerName}/>
                    <Input type={"text"} id={"registerApellido"} name={"registerLastName"} title={"Ingrese su Apellido"} register={register} validator={registerLastName} warnings={errors.registerLastName}/>
                </div>

                <div className={styles.flexGroup}>
                    <Input  type={"text"} id={"registerMail"} name={"registerEmail"} title={"Ingrese su Email"} register={register} validator={registerEmail} warnings={errors.registerEmail}/>
                    <Input type={"text"} id={"registerApodo"} name={"registerUsername"} title={"Cree un nombre de Usuario"} register={register} validator={registerUsername} warnings={errors.registerUsername}/>
                </div>

                <div className={styles.flexGroup}>
                    <Input type={"password"} id={"registerContra1"} name={"registerPass1"} title={"Ingrese su Contraseña"} register={register} validator={registerPass1} warnings={errors.registerPass1}/>
                    <Input  type={"password"} id={"registerContra2"} name={"registerPass2"} title={"Repita su Contraseña"} register={register} validator={registerPass2} warnings={errors.registerPass2}/>
                </div>
                            
                
                
                <Input type={"number"} id={"registerNumDni"} name={"registerDni"} title={"Ingrese su Dni"} register={register} validator={registerDni} warnings={errors.registerDni}/>            
                
                <ButtonAction colorSet={1} text='Crear Cuenta' type='submit' />
            </section>           
        </form>
    )
}


export default RegisterForm;