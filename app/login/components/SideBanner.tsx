import ButtonAction from '@/app/components/ButtonAction';
import styles from './SideBanner.module.css';


const SideBanner: React.FC = () =>{
    return(
        <aside className={styles.sideBanner}>
            <article className={styles.imgContainer}>
                <img src='https://www.educ.ar/uploads/resources/images/banner-home_(2).jpg'/>
                <div className={styles.toRegister}>
                    <p>¿Aún no tenés cuenta?</p>
                    <ButtonAction colorSet={1} text='Registrate' to='/register'/>
                </div>
            </article>            
        </aside>
    )
}


export default SideBanner;