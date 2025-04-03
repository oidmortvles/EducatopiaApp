"use client"
import styles from './TabsCategory.module.css';
import useFilters from '@/app/storage/filters';


interface TabsCategoryProps{
    category:string;
}

const TabsCategory : React.FC <TabsCategoryProps> = ({category}) =>{

    const {filter, filterOn} = useFilters();

    const pushButton = () =>{
        filterOn(category);
    }



    return(
        <button className={`${filter === category ? styles.tabsCategoryActive : styles.tabsCategory}`} onClick={pushButton}>
            {category}
        </button>
    )
}

export default TabsCategory;