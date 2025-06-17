"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './FormUpload.module.css';
import useAlert from '@/app/storage/alerts';
import ButtonAction from '@/app/components/ButtonAction';
import { usePost } from '@/app/utilities/usePost';


type categoryType ={
    TagID: number,
    Name: string,
}


type FormUploadprops={
    closeModal?: () => void;
    listCategory: categoryType[]
}

const FormUpload : React.FC <FormUploadprops> = ({closeModal, listCategory}) => {


    const titleRef = useRef<HTMLInputElement>(null); //=> TITULO
    const descRef = useRef<HTMLTextAreaElement>(null); //=> DESCRIPCION
    const [resource, setResource] = useState<File | null>(null); //=> RECURSO    
    const [numberCat, setNumberCat] = useState(''); //=> SELECCION DE LA CATEGORIA
    const {addAlert} = useAlert(); //=> MOSTRAR NOTIFICACION
    const {data, loading, fetchData} = usePost(); //=> HACER POST


    useEffect(() => {
        if (data) {
          addAlert(data); //=> SI HAY RESPUESTA LA AGREGA A NOTIFICACIONES
        }    
    },[data])


    const reset = () =>{
        setResource(null);
        setNumberCat('');
        if (titleRef.current) titleRef.current.value = '';
        if (descRef.current) descRef.current.value = '';
        closeModal && closeModal();
    }

    return(
        <section className={styles.formUpload}>
            <input ref={titleRef} className={styles.tittle} type="text" placeholder="Ingrese un título" name='tittle' required />
            <textarea ref={descRef} className={styles.description} placeholder="Ingrese una descripción" name='description' required ></textarea>

            <div className={styles.boxFilesCategory}>
                <div className={styles.files}>
                    <label htmlFor='fileHeader' className={styles.labelFile}>
                         {
                            resource?
                            (
                                resource.name
                            )
                            :
                            (
                                <>
                                Seleccionar PDF
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                </svg>
                                </>
                            )
                        }
                    </label>
                    <input id='fileHeader' accept="application/pdf" type="file" required onChange={(e) => setResource(e.target.files?.[0] ?? null)} className={styles.btnFiles}/>
                </div>

                <div className={styles.categorys}>
                    <label htmlFor="category">Categoría del Recurso:</label>            
                    <select id="category" name="category" onChange={(e) => setNumberCat(e.target.value)} value={numberCat} required >
                    <option value="" disabled>Seleccione una categoría...</option>
                    {
                        listCategory.map((group) => (                                
                            <option value={group.TagID} key={group.TagID}>{group.Name}</option>
                        ))
                    }
                    </select>
                </div>
            </div>

            <div className={styles.btns}>
                <ButtonAction colorSet={0} text='Cancelar' fn={reset}/>      
                <ButtonAction colorSet={1} text='Subir Recurso' loader={loading} deshabilitado={loading} />  
            </div>
        </section>
    )
}

export default FormUpload;