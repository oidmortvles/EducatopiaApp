import Slider from '@/app/components/Slider';
import styles from './SearchPanel.module.css';
import TabsCategory from '../../components/TabsCategory';
import Marcador from './Marcador';


const SearchPanel : React.FC = () =>{

    return(
        <section className={styles.searchPanel}>
            <h4 className={styles.tittle}>
                <Marcador/>
                Encontra todo el contenido por categoría
            </h4>
            <Slider >
                <TabsCategory category='Literatura' key={1}/>
                <TabsCategory category='Ciencias Sociales'/>
                <TabsCategory category='Geografia'/>
                <TabsCategory category='Matematicas'/>
                <TabsCategory category='Economia'/>
            </Slider>
        </section>
    )
}

export default SearchPanel;