import Link from 'next/link';
import styles from './VerticalCard.module.css';

interface VerticalCardProps{
    img?:string;
    tittle:string;
    parraph:string;
    to:string;
}

const VerticalCard : React.FC <VerticalCardProps> = ({img, tittle, parraph, to}) =>{
    return(
        <Link href={to} about={tittle}>
            <figure className={styles.verticalCard}>
                <div className={styles.boxImg}>
                    {img}
                </div>

                <div className={styles.boxBody}>
                    <h3 className={styles.tittle}>{tittle}</h3>
                    <p className={styles.parraph}>{parraph}</p>
                </div>
            </figure>
        </Link>
    )
}


export default VerticalCard;