import LoginForm from './components/LoginForm';
import NavLogin from './components/NavLogin';
import RecoverAccount from './components/RecoverAccount';
import SideBanner from './components/SideBanner';
import styles from './login.module.css';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Accede a tu cuenta en Educatopia para conocer todos los recursos disponibles",
};


const Login : React.FC = () =>{
    return(
        <>
            <NavLogin/>
            <main className={styles.login}>
                <SideBanner/>
                <div className={styles.bodyLogin}>
                    <LoginForm/>
                    <RecoverAccount/>
                </div>
            </main>
        </>
    )
}


export default Login;