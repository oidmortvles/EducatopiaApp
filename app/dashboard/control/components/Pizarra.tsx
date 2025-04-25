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

const content = `Hello!`;

const Pizarra : React.FC = () => {
  return (
    <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} />
  )
}

export default Pizarra;