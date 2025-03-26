import NavRegister from './components/NavRegister';
import RegisterForm from './components/RegisterForm';
import styles from './register.module.css';


const Register : React.FC = () =>{
    return(
        <>
            <NavRegister/>
            <main className={styles.register}>
                <div className={styles.bodyRegister}>
                    <RegisterForm/>
                </div>
            </main>
        </>
    )
}

export default Register;