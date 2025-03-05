import ButtonAction from './ButtonAction';
import styles from './HeadLineMiddle.module.css';
import HorizontalCard from './HorizontalCard';

const HeadLineMiddle : React.FC = () =>{
    return(
        <article className={styles.headLineMiddle}>
            <div className={styles.boxLeft}>
                <section className={styles.leftBody}>
                    <h4>PODCAST</h4>
                    <p>Por ello aquí vas a poder unirte a</p>
                    <div className={styles.buttonAccess}>
                        <ButtonAction colorSet={1} text='Acceder' to={"#"}/>
                    </div>
                </section>
            </div>


            <div className={styles.boxRight}>
                <HorizontalCard tittle='NOTAS' text='Toda una comunidad de Docentes de distantas áreas, para conectar' to='#' img={"https://img.freepik.com/premium-photo/world-book-day-boy-reading-book-scene-illustration-education-learning-concept-illustration_432516-10545.jpg"} />
                <HorizontalCard tittle='RECURSERO' text='Accede a Noticias e Informes para mantenerte actualizado' to='#' img={"https://img.freepik.com/premium-photo/world-book-day-boy-reading-book-scene-illustration-education-learning-concept-illustration_432516-10547.jpg"} />
            </div>
        </article>

    )
}


export default HeadLineMiddle;