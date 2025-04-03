import DescriptionBar from '@/app/components/DescriptionBar';
import styles from './recursero.module.css';
import SearchPanel from './components/SearchPanel';

const Recursero : React.FC = () =>{
    return(
        <article className={styles.recursero}>
            <DescriptionBar tittle='Recursero' description='Todos los recursos listados por categoria, tematica y más'/>
            <SearchPanel/>
            <h1>Recursero</h1>
        </article>
    )
}


export default Recursero;