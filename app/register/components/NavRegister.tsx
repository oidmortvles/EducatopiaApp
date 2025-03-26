import styles from './NavRegister.module.css';
import ButtonAction from "@/app/components/ButtonAction"
import Domain from "@/app/components/Domain"

const NavRegister : React.FC = () =>{
    return(
        <nav className={styles.navRegister}>
            <Domain/>
            <ButtonAction colorSet={1} text="Ingresar" to="/login"/>
        </nav>
    )
}


export default NavRegister;