import ButtonAction from '@/app/components/ButtonAction';
import styles from './OwnContent.module.css';

const OwnContent : React.FC = () =>{
    return(
        <section className={styles.ownContent}>
            <div>
                <p className={styles.leyend}>Aún no subiste contenido!</p>
                <ButtonAction colorSet={1} text='Subir Contenido' />
            </div>
        </section>
    )
}

export default OwnContent;