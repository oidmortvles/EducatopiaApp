"use client"
import { useEffect, useState } from 'react';
import styles from './DeleteGroup.module.css';
import ButtonAction from '@/app/components/ButtonAction';
import { useDelete } from '@/app/utilities/useDelete';
import useAlert from '@/app/storage/alerts';


type groupType ={
    ForumID: number,
    Name: string,
    Description: string,
    CreateDate: string,
    Status: string
}


const DeleteGroup :React.FC = () => {

    const [list, setList] = useState<groupType[]>([]); //=> LISTA DE GRUPOS
    const [numberGrup, setNumberGroup] = useState<number | ''>(''); //=> SELECCION DEL GRUPO A ELIMINAR
    const {data, loading, fetchData} = useDelete(); //=> HACER DELETE
    const {addAlert} = useAlert(); //=> MOSTRAR NOTIFICACION

    useEffect(()=>{

        if (data) {
          addAlert(data); //=> SI HAY RESPUESTA LA AGREGA A NOTIFICACIONES
        }

        const renderGroups = async () =>{
            const res = await fetch('/dashboard/control/APIS/listarGrupos');
            const data = await res.json();
            setList(data)            
        }
        renderGroups();
    },[data])


    const deteleGroup = () => {
        if (!numberGrup) {
            addAlert({message: 'Seleccione un grupo primero.' });
            return;
        }
        fetchData("/dashboard/control/APIS/borrarGrupo", {ForumID: numberGrup}); //=> ENVIAR PETICION DELETE
    }


    return(

        <section className={styles.deleteGroup}>
            {
              list.length > 3?
              (  
                <>
                <div className={styles.desplegable}>
                    <label htmlFor="listaGrupos">Grupos Activos</label>
                    <select id="listaGrupos" name="listaGrupos" onChange={(e) => setNumberGroup(Number(e.target.value))} value={numberGrup}>
                        <option value="" disabled>Seleccione un grupo...</option>
                        {
                            list.map((group) => (
                                group.ForumID !== 10 && group.ForumID !== 11 && group.ForumID !== 12 &&
                                <option value={group.ForumID} key={group.ForumID}>{group.Name}</option>
                            ))
                        }
                    </select>
                </div>
                <ButtonAction colorSet={1} text='Eliminar Grupo' fn={deteleGroup} loader={loading} deshabilitado={loading}/>
                </>
              )
              :
              (
                <p className={styles.aviso}>No hay grupos activos</p>
            )
            }
        </section>
    )
}

export default DeleteGroup;