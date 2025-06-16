"use client"
import useAlert from '@/app/storage/alerts';
import styles from './CreateCategory.module.css';
import { usePost } from '@/app/utilities/usePost';
import { useForm } from 'react-hook-form';
import Input from '@/app/components/Input';
import ButtonAction from '@/app/components/ButtonAction';
import { useEffect } from 'react';

const CreateCategory : React.FC = () =>{
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const {data, loading, fetchData} = usePost();
    const {addAlert} = useAlert();

    /* VALIDADOR DE CAMPO */
    const nameValidator= {
        required: {value:true, message:"El nombre de la categoría es requerido"},
        minLength:{value:5, message:"El campo debe tener al menos 5 caracteres"},
        maxLength:{value:20, message:"Máximo 20 caracteres"}, 
     };


     //ENVIAR FORMULARIO
    const crearCategoria = (datos:any) =>{ 
        console.log(datos);
        fetchData("/dashboard/control/APIS/crearCategoria", datos) ;             
        reset();
    }


    useEffect(() => {
        if (data) {
          addAlert(data); //=> SI HAY RESPUESTA LA AGREGA A NOTIFICACIONES
        }
      }, [data]);    


    return(
        <form className={styles.createCategory} onSubmit={handleSubmit(crearCategoria)}>                         
            <Input type={"text"}  name={"nameGroup"} id={"nameGroup"} title={"Ingrese un nombre para la Categoría"} register={register} validator={nameValidator} warnings={errors.nameGroup}/>                
            <ButtonAction colorSet={1} text='Crear Categoría' type='submit' deshabilitado={loading} loader={loading} />
        </form>
    )
}


export default CreateCategory;