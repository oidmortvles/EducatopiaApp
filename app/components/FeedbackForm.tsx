import ButtonAction from './ButtonAction';
import styles from './FeedbackForm.module.css';

const FeedbackForm : React.FC = () =>{
    return(
        <section className={styles.feedbackForm}>
            <article className={styles.container}>
                <div className={styles.cardContainer}>                
                    <aside className={styles.aside}>
                        <img alt='Logo Educatopia' src='/logo.png'/>
                        <h1 className={styles.tittle}>Educatopía</h1>
                    </aside>
                
                    <div className={styles.form}>
                        <p className={styles.proximos}>
                            Estamos próximos al lanzamiento de la Plataforma!
                        </p>
                        <div className={styles.messageBox}>
                            <p>Dejanos tu opinión!</p>
                            <ButtonAction  colorSet={1} text='Ir al Form' to='https://docs.google.com/forms/d/1QlAy5OPemXJFGAZXa2Zxl7zWdZaEijSaFSZWiAgdKoQ/edit'/>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}


export default FeedbackForm;