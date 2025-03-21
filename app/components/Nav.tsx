import ButtonAction from './ButtonAction';
import Domain from './Domain';
import styles from './Nav.module.css';

const Nav : React.FC = () =>{
    return(
        <nav className={styles.nav}>
            <Domain/>
            <ButtonAction colorSet={1} text='Ingresar' to='/login'/>
        </nav>
    )
}


export default Nav;