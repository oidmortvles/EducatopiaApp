"use client"
import Link from 'next/link';
import styles from './ButtonAction.module.css';



type btn = "button" | "submit" | "reset" | undefined;

interface ButtonActionProps {
  to?: string;
  fn?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  colorSet: number;
  type?: btn;
  deshabilitado?: boolean;
  loader?:boolean;
}

const ButtonAction: React.FC<ButtonActionProps> = ({ to, fn, text, colorSet, type, deshabilitado, loader }) => {

  const typeOfButton = type?type:"button";
  let color;

  switch (colorSet) {
    case 1:
      color=styles.buttonAction1;
      break;

    case 2:
      color=styles.buttonAction2;
      break;

    case 3:
      color=styles.buttonAction3;
      break;
      
    default:
      color=styles.buttonAction;
      break;
  }


  

  if(to){
    //SI RECIBE EL PARAMETRO "TO", FUNCIONA COMO UN "LINK"
  return (
    <Link href={to} className={color}>
        {text}
    </Link>
  )
  }else if(fn){
    //SI RECIBE EL PARAMETRO "FN", FUNCIONA COMO UN "ONCLICK"
    return (
        <button className={color} onClick={fn} type={typeOfButton} disabled={deshabilitado}>
          {
            loader ?
                ( 
                    <span className={styles.loaderContainer}>
                      <svg className={styles.loadingState} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1m0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                      </svg>
                    </span>
                ) 
                :
                (
                    text
                )
          }
        </button>
      );
  }

    return(
        <button className={color} type={typeOfButton} disabled={deshabilitado}>
          {
            loader ?
                ( 
                    <span className={styles.loaderContainer}>
                      <svg className={styles.loadingState} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1m0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                      </svg>    
                    </span>
                ) 
                :
                (
                    text
                )
          }
          
        </button>
    );
}

export default ButtonAction