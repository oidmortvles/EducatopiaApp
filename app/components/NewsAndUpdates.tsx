import styles from './NewsAndUpdates.module.css';
import Slider from './Slider';
import Tittles from './Tittles';
import VerticalCard from './VerticalCard';


const NewsAndUpdates : React.FC = () =>{
    return(

        <section className={styles.newsAndUpdates}>
            <Tittles Tittle='NOVEDADES' parraph1='Te invitamos a que conozcas todo lo que tenemos para vos' left={true} />
            <Slider>
                <VerticalCard img='' tittle='Lorem1' parraph='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, facere!' to='#'/>
                <VerticalCard img='' tittle='Lorem2' parraph='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, facere!' to='#'/>
                <VerticalCard img='' tittle='Lorem3' parraph='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, facere!' to='#'/>
                <VerticalCard img='' tittle='Lorem4' parraph='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, facere!' to='#'/>
                <VerticalCard img='' tittle='Lorem5' parraph='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, facere!' to='#'/>
            </Slider>
        </section>

    )
}


export default NewsAndUpdates;