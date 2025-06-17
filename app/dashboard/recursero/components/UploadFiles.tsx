"use client"
import { useEffect, useState } from 'react';
import styles from './UploadFiles.module.css';
import Modal from '@/app/components/Modal';
import ButtonAction from '@/app/components/ButtonAction';
import FormUpload from './FormUpload';

type categoryType ={
    TagID: number,
    Name: string,
}

const UploadFiles : React.FC = () =>{

    const [modal, setModal] = useState(false);
    const [list, setList] = useState<categoryType[]>([]); //=> LISTA DE CATEGORIAS

    useEffect(() => {        
        const renderTags = async () =>{
            const res = await fetch('/dashboard/control/APIS/listarCategorias');
            const data = await res.json();
            setList(data)            
        }
        renderTags();       
    },[])

    const cerrarModal = () =>{
        setModal(false)
    }
    

    return(
        <>
            <Modal headerText='Subir archivos' statusModal={modal} handlerModal={() => setModal(true)}>
                <FormUpload closeModal={cerrarModal} listCategory={list}/>
            </Modal>
            
            <aside className={styles.uploadFiles}>
                <h4 className={styles.tittle}>Subí tus propios archivos y compartilos con la comunidad de Educatopía</h4>
                <ButtonAction colorSet={1} text='Crear Recurso' fn={()=> setModal(true)} />            
            </aside>
        </>
    )
}

export default UploadFiles;