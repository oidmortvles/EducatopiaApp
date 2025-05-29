import DescriptionBar from '@/app/components/DescriptionBar';
import HeaderProfile from './components/HeaderProfile';
import styles from './perfil.module.css';
import OwnContent from './components/OwnContent';
import getUserData from './services/getUserData';


const Perfil : React.FC = async () =>{

    const userData = await getUserData()

    return(
        <article className={styles.perfil}>
            <DescriptionBar tittle='Perfil' description='Tu área personal'/>
            <HeaderProfile data={userData[0]}/>
            <OwnContent/>
        </article>
    )
}


export default Perfil