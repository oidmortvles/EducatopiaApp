import DescriptionBar from '@/app/components/DescriptionBar';
import styles from './salir.module.css';
import LogOutPannel from './components/LogOutPannel';

const Salir : React.FC = () =>{
    return(
        <article className={styles.salir}>
            <DescriptionBar tittle='Salir' description='Cerrar tu sesión en este dispositivo' />
            <LogOutPannel/>
        </article>
    )
}

export default Salir;