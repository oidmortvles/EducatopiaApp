"use client"

import Slider from '@/app/components/Slider';
import styles from './SearchPanel.module.css';
import TabsCategory from '../../components/TabsCategory';
import useFilters from '@/app/storage/filters';


const SearchPanel : React.FC = () =>{

    const {filter} = useFilters();

    return(
        <section className={styles.searchPanel}>
            <h4 className={styles.tittle}>Encontra todo el contenido por categoria</h4>
            <Slider >
                <TabsCategory category='Literatura' state={filter} key={1}/>
                <TabsCategory category='Ciencias Sociales' state={filter} />
                <TabsCategory category='Geografia' state={filter} />
                <TabsCategory category='Matematicas' state={filter} />
                <TabsCategory category='Economia' state={filter} />
            </Slider>
        </section>
    )
}

export default SearchPanel;