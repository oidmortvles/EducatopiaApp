import ButtonAction from './ButtonAction';
import styles from './Header.module.css';

const Header = () =>{
    return(
        <header className={styles.header}>
            
            <section className={styles.gradientBox}>
                <div className={styles.textBox}>
                    <h3 className={styles.tittle}>Un Ecosistema <span>educativo</span> para docentes </h3>
                    <p className={styles.parraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus assumenda a sequi fuga quis tempore harum voluptatibus cum? Nisi, deleniti!</p>
                    <div className={styles.buttons}>
                        <ButtonAction colorSet={1} text='Conocer los recursos' />
                        <ButtonAction colorSet={0} text='Susbcribirse' />
                    </div>
                </div>
            </section>
            
            <img src="https://i.ytimg.com/vi/TDtJIqmprMQ/maxresdefault.jpg" alt="" className={styles.video}/>
        </header>
    )
}    

export default Header;