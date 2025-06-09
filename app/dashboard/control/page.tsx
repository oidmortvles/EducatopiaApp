import DescriptionBar from '@/app/components/DescriptionBar';
import styles from './control.module.css';
import SelectorTab from './components/SelectorTab';

const Control : React.FC = () =>{
    return(
        <article className={styles.control}>
            <DescriptionBar tittle='Control' description='Creación y control de contenidos para la plataforma'/>
             <SelectorTab/>
        </article>
    )
}

export default Control;