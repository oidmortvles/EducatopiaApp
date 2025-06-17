"use client"
import styles from './Modal.module.css';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';


interface ModalProp {
    statusModal: boolean;
    handlerModal?: () => void;
    headerText:string;
    children: React.ReactNode;
  }


const Modal : React.FC <ModalProp> = ({ statusModal, handlerModal, headerText,  children,}) =>{
    
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (statusModal) {
          dialogRef.current?.show();
        } else {
          dialogRef.current?.close();
        }
      }, [statusModal]);


    return(
            <dialog ref={dialogRef} className={styles.modal}>
                <div className={styles.modalContainer}>
                    <motion.section className={styles.modalBody}                        
                        initial={{ y:300 }} 
                        animate={{ y:0, transition: { duration:0.3 }}}
                        exit={{ y:300 }}
                    >                    
                        <div className={styles.modalContent}>
                            <header className={styles.headerModal}>
                                <p className={styles.headerText}>{headerText}</p>                                
                            </header>
                            {children}
                        </div>
                    </motion.section>
                </div>
            </dialog>

    );
}

export default Modal