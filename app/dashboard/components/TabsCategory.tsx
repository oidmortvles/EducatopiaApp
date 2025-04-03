"use client"
import styles from './TabsCategory.module.css';
import useFilters from '@/app/storage/filters';


interface TabsCategoryProps{
    category:string;
    state:string;
}

const TabsCategory : React.FC <TabsCategoryProps> = ({category, state}) =>{

    const {filterOn} = useFilters();

    const pushButton = () =>{
        filterOn(category);
    }



    return(
        <button className={`${state == category ? styles.tabsCategoryActive : styles.tabsCategory}`} onClick={pushButton}>
            {category}
        </button>
    )
}

export default TabsCategory;