import NavRegister from './components/NavRegister';
import RegisterForm from './components/RegisterForm';
import styles from './register.module.css';


const Register : React.FC = () =>{
    return(
        <>
            <NavRegister/>
            <main className={styles.register}>
                <RegisterForm/>
            </main>
        </>
    )
}

export default Register;