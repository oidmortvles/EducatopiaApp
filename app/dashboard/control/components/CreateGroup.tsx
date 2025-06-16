"use client"
import { useForm } from 'react-hook-form';
import styles from './CreateGroup.module.css';
import { usePost } from '@/app/utilities/usePost';
import useAlert from '@/app/storage/alerts';
import Input from '@/app/components/Input';
import ButtonAction from '@/app/components/ButtonAction';
import { useEffect } from 'react';

const CreateGroup : React.FC = () => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const {data, loading, fetchData} = usePost();
    const {addAlert} = useAlert();

    /* VALIDADOR DE CAMPO */
    const nameValidator= {
        required: {value:true, message:"El nombre es requerido"},
        minLength:{value:5, message:"El campo debe tener al menos 5 caracteres"},
        maxLength:{value:20, message:"Máximo 20 caracteres"}, 
     };

    const descriptionValidator= {
        required:{value:true, message:"La Descripción es requerida"},
        minLength:{value:5, message:"El campo debe tener al menos 5 caracteres"},
        maxLength:{value:150, message:"El campo debe tener menos de 150 caracteres"},            
    }


     //ENVIAR FORMULARIO
    const crearGrupo = (datos:any) =>{ 
        console.log(datos);
        fetchData("/dashboard/control/APIS/crearGrupo", datos) ;             
        reset();
    }


    useEffect(() => {
        if (data) {
          addAlert(data); //=> SI HAY RESPUESTA LA AGREGA A NOTIFICACIONES
        }
      }, [data]);    


    return(
        <form className={styles.createGroup} onSubmit={handleSubmit(crearGrupo)}>
            <header className={styles.header}>
                <Input type={"text"}  name={"nameGroup"} id={"nameGroup"} title={"Ingrese un título para el Grupo"} register={register} validator={nameValidator} warnings={errors.nameGroup}/>
                <Input type={"text"}  name={"descriptionGroup"} id={"descriptionGroup"} title={"Ingrese una descripción"} register={register} validator={descriptionValidator} warnings={errors.descriptionGroup}/>
            </header>     
            
            
            <div>
                <ButtonAction colorSet={1} text='Crear Grupo' type='submit' deshabilitado={loading} loader={loading} />
            </div>
        </form>
    )
}

export default CreateGroup;