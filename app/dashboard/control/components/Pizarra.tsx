"use client"
import styles from './Pizarra.module.css'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Bold from '../../components/icons/Bold';
import Italic from '../../components/icons/Italic';
import Parraph from '../../components/icons/Parraph';
import Resalt from '../../components/icons/Resalt';
import BulletList from '../../components/icons/BulletList';
import Blockquote from '../../components/icons/Blockquote';
import HorizontalRule from '../../components/icons/HorizontalRule';
import HardBreak from '../../components/icons/HardBreak';
import Undo from '../../components/icons/Undo';
import Redo from '../../components/icons/Redo';
import ClearMarks from '../../components/icons/ClearMarks';
import H1 from '../../components/icons/H1';
import H2 from '../../components/icons/H2';
import H3 from '../../components/icons/H3';
import ButtonAction from '@/app/components/ButtonAction';
import { useEffect, useRef, useState } from 'react';
import { usePost } from '@/app/utilities/usePost';
import useAlert from '@/app/storage/alerts';


type categoryType ={
    TagID: number,
    Name: string,
}


const MenuBar = () => {
  const { editor } = useCurrentEditor()

    if (!editor) {
      return null
    }

    return (
      <div className={styles.menuBar}>
        <div className={styles.header}> 
            
            <button onClick={() => editor.chain().focus().setParagraph().run()}
              className={editor.isActive('paragraph') ? styles.isActive : ''}>
              <Parraph/>
            </button>

            <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} 
              className={editor.isActive('bold') ? styles.isActive : ''}>
            <Bold/>
            </button>

            <button
              onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? styles.isActive : ''}>
              <Italic/>
            </button>

            <button
              onClick={() => editor.chain().focus().toggleCode().run()} disabled={!editor.can().chain().focus().toggleCode().run()}
              className={editor.isActive('code') ? styles.isActive : ''}>
              <Resalt/>
            </button>          

            <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive('heading', { level: 1 }) ? styles.isActive : ''}>
              <H1/>
            </button>

            <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? styles.isActive : ''}>
              <H2/>
            </button>

            <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive('heading', { level: 3 }) ? styles.isActive : ''}>
              <H3/>
            </button>

            <button onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? styles.isActive : ''}>
              <BulletList/>
            </button>
            
            <button onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive('blockquote') ? styles.isActive : ''}>
              <Blockquote/>
            </button>

            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
              <HorizontalRule/>
            </button>

            <button onClick={() => editor.chain().focus().setHardBreak().run()}>
              <HardBreak/>
            </button>
          </div>

          
          <div className={styles.separator}>
            <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
              <ClearMarks/>
            </button>

            <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()}>
              <Undo/>
            </button>

            <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()}>
              <Redo/>
            </button>               
          </div>

      </div>
    )
}

const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
]

const content = ``;

const Pizarra : React.FC = () => {

  const titleRef = useRef<HTMLInputElement>(null); //=> TITULO
  const descRef = useRef<HTMLTextAreaElement>(null); //=> DESCRIPCION
  const audiovisualRef = useRef<HTMLInputElement>(null); //=> AUDIOVISUAL  
  const [editorInstance, setEditorInstance] = useState<any>(null); //=> CONTENIDO
  const [fileHeader, setFileHeader] = useState<File | null>(null); //=> FILE HEADER
  const [fileBody, setFileBody] = useState<File | null>(null); //=> FILE BODY
  const [fileFooter, setFileFooter] = useState<File | null>(null); //=> FILE FOOTER  
  const [list, setList] = useState<categoryType[]>([]); //=> LISTA DE CATEGORIAS
  const [numberCat, setNumberCat] = useState(''); //=> SELECCION DE LA CATEGORIA
  const [forum, setForum] = useState("0"); //=> DESTINO DEL POST (10: RECURSERO, 11: NOTAS, 12: PODCAST)
  const {data, loading, fetchData} = usePost(); //=> HACER POST
  const {addAlert} = useAlert(); //=> MOSTRAR NOTIFICACION

  useEffect(() => {
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

  
  const crearPosteo = async () => {
    const title = titleRef.current?.value ?? '';
    const descripcion = descRef.current?.value ?? '';
    const audiovisuals = audiovisualRef.current?.value ?? '';
    const content = editorInstance?.getHTML() ?? '';


    //=> CREACION DEL FORMDATA
    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Description', descripcion);
    formData.append('Audiovisuals', audiovisuals);
    formData.append('Content', content);

    if (fileHeader) {
      formData.append('header', fileHeader, fileHeader.name);
    }
    if (fileBody) {
      formData.append('body', fileBody, fileBody.name);
    }
    if (fileFooter) {
      formData.append('footer', fileFooter, fileFooter.name);
    }

    formData.append('Tags', numberCat.toString());
    formData.append('ActivityID', "1"); //=> ID DE LA ACTIVIDAD (1: PIZARRA)

    formData.append('Forums', forum);
    
    await fetch('/dashboard/control/APIS/crearPost', {
    method: 'POST',
    body: formData, // ⬅️ importante
    // ❌ no pongas Content-Type a mano, el navegador lo maneja
  });
    
  }


  return (
    <>      
      <input ref={titleRef} className={styles.tittle} type="text" placeholder="Ingrese un título para el Post" name='tittle' />
      <textarea ref={descRef} className={styles.description} placeholder="Ingrese una descripción para el Post" name='description'></textarea>
      <input  ref={audiovisualRef} className={styles.audiovisual} type="text" placeholder="Ingrese un link para el Post" name='audiovisual' />
      
      <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} onCreate={({ editor }) => setEditorInstance(editor)}/>
      
      <section className={styles.optionsContainer}>        
          
          <div className={styles.files}>
            <p>Subir archivos:</p>
            <label htmlFor='fileHeader' className={styles.labelFile} style={fileHeader ? { backgroundColor: '#5c97a0' } : {}}> Subir Header </label>
            <input id='fileHeader' className={styles.btnFiles} type="file" onChange={(e) => setFileHeader(e.target.files?.[0] ?? null)}/>
            
            <label htmlFor='fileBody' className={styles.labelFile} style={fileBody ? {backgroundColor: '#5c97a0'} : {}}> Subir Body </label>
            <input id='fileBody' className={styles.btnFiles} type="file" onChange={(e) => setFileBody(e.target.files?.[0] ?? null)}/>
            
            <label htmlFor='fileFooter' className={styles.labelFile} style={fileFooter ? {backgroundColor : '#5c97a0'} : {}}> Subir Footer </label>
            <input id='fileFooter' className={styles.btnFiles} type="file" onChange={(e) => setFileFooter(e.target.files?.[0] ?? null)}/>
          </div>

          <div className={styles.categorys}>
            <label htmlFor="category">Categoría:</label>            
            <select id="category" name="category" onChange={(e) => setNumberCat(e.target.value)} value={numberCat}>
              <option value="" disabled>Seleccione una categoría...</option>
              {
                  list.map((group) => (                                
                      <option value={group.TagID} key={group.TagID}>{group.Name}</option>
                  ))
              }
            </select>
          </div>

          <div className={styles.subjetc}>
            <label htmlFor="contenidos">Subir en:</label>
            <select id="contenidos" name="contenidos" onChange={(e) => setForum(e.target.value)} value={forum}>
              <option value="0" disabled>Seleccione un destino...</option>
              <option value="10">RECURSERO</option>
              <option value="11">NOTAS</option>
              <option value="12">PODCAST</option>
            </select>
          </div>
      </section>
        
        <div className={styles.btnSend}>
          <ButtonAction colorSet={1} text='Crear Post' fn={crearPosteo} loader={loading} deshabilitado={loading} />        
        </div>
    </>
  )
}

export default Pizarra;