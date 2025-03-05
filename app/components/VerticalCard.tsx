import ButtonAction from './ButtonAction';
import styles from './VerticalCard.module.css';

interface VerticalCardProps{
    img?:string;
    tittle:string;
    parraph:string;
    to:string;
}

const VerticalCard : React.FC <VerticalCardProps> = ({img, tittle, parraph, to}) =>{
    return(
        <figure className={styles.verticalCard}>
            <div className={styles.boxImg}>
                {img}
            </div>

            <div className={styles.boxBody}>
                <h3 className={styles.tittle}>{tittle}</h3>
                <p className={styles.parraph}>{parraph}</p>
                <ButtonAction colorSet={1} text='ver más' to={to}/>
            </div>
        </figure>
    )
}


export default VerticalCard;