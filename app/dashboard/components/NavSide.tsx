

import Domain from '@/app/components/Domain';
import Close from './icons/Close';
import MyResources from './icons/MyResources';
import Profile from './icons/Profile';
import Resources from './icons/Resources';
import Navigator from './Navigator';
import styles from './NavSide.module.css';
import Groups from './icons/Groups';


const NavSide : React.FC = () =>{
    return(
        <nav className={styles.navSide}>
            <Domain/>
            
            <ul className={styles.list}>
                <Navigator text='Perfil' icon={<Profile/>} to='dashboard/perfil' />
                <Navigator text='Recursero' icon={<Resources/>} to='dashboard/recursero' />
                <Navigator text='Grupos' icon={<Groups/>} to='dashboard/grupos' />
                <Navigator text='Mis recursos' icon={<MyResources/>} to='dashboard/misrecursos' />                          
            </ul>

            <div className={styles.foot}>
                <Navigator text='Cerrar Sesión' icon={<Close/>} to='dashboard/salir'/>
            </div>
        </nav>
    )
}


export default NavSide;