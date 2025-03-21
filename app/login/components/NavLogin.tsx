import ButtonAction from "@/app/components/ButtonAction"
import Domain from "@/app/components/Domain"
import styles from './Navlogin.module.css';

const NavLogin : React.FC = () =>{
    return(
        <nav className={styles.navLogin}>
            <Domain/>
            <ButtonAction colorSet={1} text="Registrarte" to="/register"/>
        </nav>
    )
}


export default NavLogin;