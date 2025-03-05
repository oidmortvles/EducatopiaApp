import styles from './Content.module.css';
import HeadLineMiddle from "./HeadLineMiddle";
import NewsAndUpdates from './NewsAndUpdates';
import Separator from "./Separator";
import Tittles from './Tittles';

const Content : React.FC = () =>{
    return(
        <section className={styles.content}>
            
            <Tittles Tittle='SOMOS COMUNIDAD' parraph1='Potenciemos la comunidad docente para mejorar la educación.' parraph2='Tu aporte y participación son escenciales para sostener un espacio profesional basado en la colaboración profesional' />
            
            <div className={styles.contentDiv}>
                <Separator tittle='GRUPOS DE INTERCAMBIO' parraph='Educatopia busca ser una comunidad para la comunidad docente.' parraph2='' img='https://img.freepik.com/premium-vector/exploring-information-through-books-digital-technologies_1147429-50244.jpg?w=1480' />
                <HeadLineMiddle/>
            </div>

            <NewsAndUpdates/>
            
        </section>
    )
}


export default Content