import ButtonAction from '@/app/components/ButtonAction';
import styles from './OwnContent.module.css';

const OwnContent : React.FC = () =>{
    return(
        <section className={styles.ownContent}>
            <div className={styles.changePass}>
                <p className={styles.leyend}>Cambiar Contraseña</p>
                <ButtonAction colorSet={1} text='Subir Contenido' />
            </div>
        </section>
    )
}

export default OwnContent;