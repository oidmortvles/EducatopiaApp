import ButtonAction from './ButtonAction';
import styles from './Community.module.css';

const Community : React.FC = () =>{
    return(
        <article className={styles.community}>
            <header>
                <h2 className={styles.tittle}>Comunidad <span>Educativa</span></h2>
                <p>
                    La comunidad es el pilar de este proyecto, ya que somos los docentes quienes
                    escribimos, conversamos y nos metemos en el debate público sobre la educación,
                    además de compartir y encontrar recursos para pensar nuestra práctica. Nuestro
                    ecosistema digital es un espacio seguro para el intercambio profesional, generando
                    redes en los diversos puntos de nuestro país. ¡Potenciemos a la comunidad educativa
                    para mejorar la educación, sumate a la comunidad y apoyanos a sostener este nuevo
                    espacio sobre educación!
                </p>            
            </header>

            <div className={styles.btnDiv}>
                <ButtonAction colorSet={1} text='Sumate' to='#'/>
            </div>
        </article>
    )
}

export default Community;