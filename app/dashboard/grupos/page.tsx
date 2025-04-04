import DescriptionBar from '@/app/components/DescriptionBar';
import styles from './grupos.module.css';

const Grupos : React.FC = () =>{
    return(

        <article className={styles.grupos}>
            <DescriptionBar tittle='Grupos' description='Un solo espacio desde donde gestionar tus grupos y foros'/>
            <h3>GRUPOS</h3>

        </article>
    )
}

export default Grupos;