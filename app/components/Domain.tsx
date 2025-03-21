"use server"
import styles from './Domain.module.css';
import Link from 'next/link';

const Domain : React.FC = () =>{
    return(
        <Link href={"/"} className={styles.domain}>
             <h2 className={styles.name}>EDUCATOPIA</h2>
        </Link>
    )
}

export default Domain;