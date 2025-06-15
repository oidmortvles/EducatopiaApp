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
import { useRef, useState } from 'react';


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

const content = `Contenido del Post`;

const Pizarra : React.FC = () => {

  const titleRef = useRef<HTMLInputElement>(null); //=> TITULO
  const descRef = useRef<HTMLInputElement>(null); //=> DESCRIPCION
  const audiovisualRef = useRef<HTMLInputElement>(null); //=> AUDIOVISUAL  
  const [editorInstance, setEditorInstance] = useState<any>(null); //=> CONTENIDO
  const [fileHeader, setFileHeader] = useState<File | null>(null); //=> FILE HEADER
  const [fileBody, setFileBody] = useState<File | null>(null); //=> FILE BODY
  const [fileFooter, setFileFooter] = useState<File | null>(null); //=> FILE FOOTER  
  const [forum, setForum] = useState("1"); //=> DESTINO DEL POST (1: RECURSERO, 2: NOTAS, 3: PODCAST)

  
  const crearPosteo = () => {
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

    formData.append('Forums', forum)
    
    console.log(formData);
  }


  return (
    <>      
      <input ref={titleRef} className={styles.tittle} type="text" placeholder="Ingrese un título para el Post" name='tittle' />
      <input  ref={descRef} className={styles.description} type="text" placeholder="Ingrese una descripción para el Post" name='description' />
      <input  ref={audiovisualRef} className={styles.audiovisual} type="text" placeholder="Ingrese un link para el Post" name='audiovisual' />
      
      <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} onCreate={({ editor }) => setEditorInstance(editor)}/>
      
      <section className={styles.optionsContainer}>        
          <div className={styles.files}>
            <p>Subir archivos</p>
            <label htmlFor='fileHeader' className={styles.labelFile} style={fileHeader ? { backgroundColor: '#5c97a0' } : {}}> Subir Header </label>
            <input id='fileHeader' className={styles.btnFiles} type="file" onChange={(e) => setFileHeader(e.target.files?.[0] ?? null)}/>
            
            <label htmlFor='fileBody' className={styles.labelFile} style={fileBody ? {backgroundColor: '#5c97a0'} : {}}> Subir Body </label>
            <input id='fileBody' className={styles.btnFiles} type="file" onChange={(e) => setFileBody(e.target.files?.[0] ?? null)}/>
            
            <label htmlFor='fileFooter' className={styles.labelFile} style={fileFooter ? {backgroundColor : '#5c97a0'} : {}}> Subir Footer </label>
            <input id='fileFooter' className={styles.btnFiles} type="file" onChange={(e) => setFileFooter(e.target.files?.[0] ?? null)}/>
          </div>

          <div className={styles.subjetc}>
            <label htmlFor="contenidos">Subir en:</label>
            <select id="contenidos" name="contenidos" onChange={(e) => setForum(e.target.value)}>
              <option value="10">RECURSERO</option>
              <option value="11">NOTAS</option>
              <option value="12">PODCAST</option>
            </select>
          </div>
      </section>
        
        <div className={styles.btnSend}>
          <ButtonAction colorSet={1} text='Crear Post' fn={crearPosteo}/>        
        </div>
    </>
  )
}

export default Pizarra;