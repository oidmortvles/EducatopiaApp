"use client"
import styles from './Navigator.module.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from "next/link";


interface NavigatorProps{
    text:string;
    icon:React.JSX.Element;
    to:string;
}

const Navigator : React.FC <NavigatorProps> = ({text, to, icon }) =>{

    const [selected,setSelected] = useState(false);
    const path = usePathname();

    useEffect(() => {
        setSelected(path === to.toLowerCase());
      }, [path, to]);
      
      

    return(
        <Link href={to} className={`${selected ? styles.selected:styles.navigator}`}>
            <span className={styles.icon}>{icon}</span>
            <span  className={styles.text}>{text}</span>
        </Link>
    )
}

export default Navigator;