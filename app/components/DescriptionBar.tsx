import styles from './DescriptionBar.module.css';

interface DescriptionBarProps{
    tittle:string;
    description:string;
}

const DescriptionBar : React.FC <DescriptionBarProps> = ({tittle, description}) =>{
    return(
        <section className={styles.descriptionBar}>
            <h1 className={styles.tittle}>{tittle}</h1>
            <p className={styles.description}>{description}</p>
        </section>
    )
}


export default DescriptionBar;