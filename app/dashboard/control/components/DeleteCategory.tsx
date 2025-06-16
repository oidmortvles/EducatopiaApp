"use client"
import styles from './DeteleCategory.module.css'
import { useEffect, useState } from 'react';
import ButtonAction from '@/app/components/ButtonAction';
import { useDelete } from '@/app/utilities/useDelete';
import useAlert from '@/app/storage/alerts';


type categoryType ={
    TagID: number,
    Name: string,
}


const DeleteCategory :React.FC = () => {

    const [list, setList] = useState<categoryType[]>([]); //=> LISTA DE CATEGORIAS
    const [numberCat, setNumberCat] = useState<number | ''>(''); //=> SELECCION DE LA CATEGORIA A ELIMINAR
    const {data, loading, fetchData} = useDelete(); //=> HACER DELETE
    const {addAlert} = useAlert(); //=> MOSTRAR NOTIFICACION

    useEffect(()=>{

        if (data) {
          addAlert(data); //=> SI HAY RESPUESTA LA AGREGA A NOTIFICACIONES
        }

        const renderTags = async () =>{
            const res = await fetch('/dashboard/control/APIS/listarCategorias');
            const data = await res.json();
            setList(data)            
        }
        renderTags();
    },[data])


    const deteleCategory = () => {
        if (!numberCat) {
            addAlert({message: 'Seleccione una categoría primero.' });
            return;
        }
        fetchData("/dashboard/control/APIS/borrarCategoria", {TagID : numberCat}); //=> ENVIAR PETICION DELETE
    }


    return(

        <section className={styles.deleteGroup}>
            {
              list.length > 0?
              (  
                <>
                <div className={styles.desplegable}>
                    <label htmlFor="listaCategorias">Categorías Activas</label>
                    <select id="listaCategorias" name="listaCategorias" onChange={(e) => setNumberCat(Number(e.target.value))} value={numberCat}>
                        <option value="" disabled>Seleccione una categoría...</option>
                        {
                            list.map((group) => (                                
                                <option value={group.TagID} key={group.TagID}>{group.Name}</option>
                            ))
                        }
                    </select>
                </div>
                <ButtonAction colorSet={1} text='Eliminar Categoría' fn={deteleCategory} loader={loading} deshabilitado={loading}/>
                </>
              )
              :
              (
                <p className={styles.aviso}>No hay categorías activas</p>
            )
            }
        </section>
    )
}

export default DeleteCategory;