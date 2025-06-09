import styles from './TabsData.module.css';

interface TabsDataProps{
    tittle: string;
    data:string | null;
}

const TabsData : React.FC <TabsDataProps> = ({tittle, data}) =>{
    return(
        <li className={styles.tabsData}>
            <p className={styles.tittle}>• {tittle}</p>
            <p className={styles.data}>{data ? data : "Sin completar"}</p>
        </li>
    )
}


export default TabsData;