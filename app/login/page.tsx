import LoginForm from './components/LoginForm';
import styles from './login.module.css';

const Login : React.FC = () =>{
    return(
        <main className={styles.login}>
            <h1>login</h1>
            <LoginForm/>
        </main>
    )
}


export default Login;