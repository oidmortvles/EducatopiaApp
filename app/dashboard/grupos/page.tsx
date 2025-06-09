import DescriptionBar from '@/app/components/DescriptionBar';
import styles from './grupos.module.css';
import { Forum } from 'next/font/google';
import ForumContainer from './components/ForumContainer';

const Grupos : React.FC = async () =>{

    
    return(

        <article className={styles.grupos}>
            <DescriptionBar tittle='Grupos' description='Un solo espacio desde donde gestionar tus grupos y foros'/>
            <ForumContainer/>
        </article>
    )
}

export default Grupos;