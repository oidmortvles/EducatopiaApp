import Domain from '@/app/components/Domain';
import Close from './icons/Close';
import Profile from './icons/Profile';
import Resources from './icons/Resources';
import Navigator from './Navigator';
import styles from './NavSide.module.css';
import Groups from './icons/Groups';
import Podcast from './icons/Podcast';
import Notes from './icons/Notes';
import Slider from '@/app/components/Slider';
import Dash from './icons/Dash';




const NavSide : React.FC = () =>{
    return(
        <nav className={styles.navSide}>
            <Domain/>
            <Slider>
                <Navigator text='Perfil' icon={<Profile/>} to='/dashboard/perfil' />
                <Navigator text='Grupos' icon={<Groups/>} to='/dashboard/grupos' />
                <Navigator text='Recursero' icon={<Resources/>} to='/dashboard/recursero' />
                <Navigator text='Notas' icon={<Notes/>} to='/dashboard/notas'/>
                <Navigator text='Podcast' icon={<Podcast/>} to='/dashboard/podcast'/>   
                <Navigator text='Control' icon={<Dash/>} to='/dashboard/control'/>
                <Navigator text='Salir' icon={<Close/>} to='/dashboard/salir'/>
            </Slider>
        </nav>
    )
}


export default NavSide;