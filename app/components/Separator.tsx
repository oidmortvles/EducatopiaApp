import ButtonAction from './ButtonAction';
import styles from './Separator.module.css';

interface SeparatorProps{
    tittle:string;
    parraph:string;
    parraph2?:string;
    img?:string;
}

const Separator : React.FC <SeparatorProps> = ({tittle, parraph, parraph2, img}) =>{
    return(
        <article className={styles.separator} style={{ backgroundImage: img ? `url(${img})` : "none" }}>
                <div className={styles.textContainer}>
                    <h4 className={styles.tittle}>{tittle}</h4>                
                    <p>{parraph}</p>
                    <p>{parraph2}</p>
                    <div className={styles.buttonAccess}>
                        <ButtonAction colorSet={1} text='ACCEDER' to='#'/>
                    </div>
                </div>
        </article>
    )
}


export default Separator;