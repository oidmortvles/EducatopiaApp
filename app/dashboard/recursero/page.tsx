import DescriptionBar from '@/app/components/DescriptionBar';
import styles from './recursero.module.css';
import SearchPanel from './components/SearchPanel';
import ContainerRecurses from './components/ContainerRecurses';

const Recursero : React.FC = () =>{
    return(
        <article className={styles.recursero}>
            <DescriptionBar tittle='Recursero' description='Todos los recursos listados por categoria, tematica y más'/>
            <SearchPanel/>
            <ContainerRecurses/>
        </article>
    )
}


export default Recursero;