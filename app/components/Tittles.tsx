import styles from './Tittles.module.css';


interface TittlesProps{
    Tittle:string;
    parraph1? : string;
    parraph2? : string;
    left?:boolean;
}


const Tittles : React.FC <TittlesProps> = ({Tittle, parraph1 ,parraph2, left}) =>{
    return(

            <header className={`${left? styles.headerLeft :styles.header}`}>
                <h3 className={styles.tittle}>{Tittle}</h3>
                <p className={styles.parraph}>{parraph1}</p>
                <p className={styles.parraph}>{parraph2}</p>
            </header>
    )
}

export default Tittles;