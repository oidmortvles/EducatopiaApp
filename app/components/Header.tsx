import ButtonAction from './ButtonAction';
import styles from './Header.module.css';

const Header = () =>{
    return(
        <header className={styles.header}>
            <section className={styles.firstSection}>
                <h3 className={styles.tittle}>Un Ecosistema <span>educativo</span> para docentes </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus assumenda a sequi fuga quis tempore harum voluptatibus cum? Nisi, deleniti!</p>
                <div className={styles.buttons}>
                    <ButtonAction colorSet={1} text='Conocer los recursos' />
                    <ButtonAction colorSet={0} text='Susbcribirse' />
                </div>
            </section>
            
            <section className={styles.secondSection}>
                 {/* <img src="https://img.freepik.com/premium-photo/three-friends-working-together_540381-7519.jpg" alt="Presentación de Educatopia" /> */}
                <img src="https://st3.depositphotos.com/4821625/36187/v/450/depositphotos_361870760-stock-illustration-lichen-form-design-project-vector.jpg" alt="Presentación de Educatopia" />
                {/* <img src="https://img.freepik.com/premium-photo/three-friends-working-together_540381-7519.jpg" alt="Presentación de Educatopia" /> */}
            </section>
        </header>
    )
}    

export default Header;