/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import styles from './Input.module.css';
import React, { useState } from 'react';


interface InputTextProp{
    type?:string;
    name:string;
    id:string;
    title:string;
    register?:any;
    validator?:any;
    warnings?:any;
}

const Input:React.FC<InputTextProp>= ({type, name, id, title, register, validator, warnings}) =>{

    const[show,setShow] = useState ('password');
    const mostrarPass=() => setShow(show === 'password' ? 'text' : 'password');

    return(
        <>
    {type==="password"?(
      <div className={styles.inputTextContainer}>
        <div className={styles.inputModernBox}>
            <input 
                  {...register(name,validator)}
                  type={show}
                  name={name}
                  id={id}
                  className={styles.imInput}
                  placeholder=''
                  autoComplete="off" 
            />

            <label htmlFor={id} className={styles.imLabel}>
                {title}
            </label>
            
            <button 
              onClick={mostrarPass}
              className={`${styles.imButtonView} ${show === "text" ? styles.imButtonViewActive : ''}`} 
              type='button'
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                  </svg>
                  
            </button>         
        </div>
          {warnings ? <span className={styles.errorCampus}>{warnings.message}</span>:null}
      </div>


    ):(
      
      <div className={styles.inputTextContainer}>
        <div className={styles.inputModernBox}>
            <input
                {...register(name,validator)}
                type={type}
                name={name}
                id={id}
                className={styles.imInput}
                placeholder=''
                autoComplete="off" 
            />
          
            <label htmlFor={id} className={styles.imLabel}>
                  {title}
            </label>            
        </div>

        {warnings ? <span className={styles.errorCampus}>{warnings.message}</span>:<span className={styles.errorCampus}></span>}
      </div>
    )}
    </>
    )
}


export default Input;