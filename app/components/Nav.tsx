import ButtonAction from './ButtonAction';
import styles from './Nav.module.css';

const Nav : React.FC = () =>{
    return(
        <nav className={styles.nav}>
            <div className={styles.logoDiv}>
                <h2 className={styles.logo}>EDUCATOPIA</h2>
            </div>

            <ButtonAction colorSet={1} text='Ingresar' to='/login'/>
        </nav>
    )
}


export default Nav;