import DescriptionBar from '@/app/components/DescriptionBar';
import HeaderProfile from './components/HeaderProfile';
import styles from './perfil.module.css';
import OwnContent from './components/OwnContent';


const Perfil : React.FC = () =>{
    return(
        <article className={styles.perfil}>
            <DescriptionBar tittle='Perfil' description='Tu área personal'/>
            <HeaderProfile/>
            <OwnContent/>
        </article>
    )
}


export default Perfil