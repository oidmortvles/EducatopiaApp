import DescriptionBar from '@/app/components/DescriptionBar';
import Pizarra from './components/Pizarra';
import styles from './control.module.css';

const Control : React.FC = () =>{
    return(
        <article className={styles.control}>
            <DescriptionBar tittle='Control' description='Creación de notas y contenidos para la plataforma'/>
            <Pizarra/>
        </article>
    )
}

export default Control;