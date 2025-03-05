import ButtonAction from './ButtonAction';
import styles from './HorizontalCard.module.css';

interface HorizontalCardProps{
    tittle: string;
    text:string;
    to:string;
    img:string;
}

const HorizontalCard : React.FC <HorizontalCardProps> = ({tittle, text, to, img}) =>{
    return(
        <figure className={styles.horizontalCard}>
            <div className={styles.imgBox}>
                <img src={img} alt="" />
            </div>

            <section className={styles.cardBody}>
                <h5>{tittle}</h5>
                <p>{text}</p>
                <div className={styles.buttonAccess}>
                    <ButtonAction colorSet={1} text='Acceder' to={to}/>
                </div>
            </section>

        </figure>
    )
}

export default HorizontalCard;