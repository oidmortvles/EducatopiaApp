"use client"
import styles from './SelectorTab.module.css'
import Slider from '@/app/components/Slider';
import TabControl from './TabControl';
import { useState } from 'react';
import Pizarra from './Pizarra';
import CreateGroup from './CreateGroup';

const SelectorTab : React.FC = () =>{
    const [activeSection, setActiveSection] = useState("");

    //=> FUNCION PARA ELEGIR TAB
    const choiseSection = (section: string) => {
        setActiveSection(section);
    }

    //=> FUNCION PARA RENDERIZAR TAB
    const renderContent = () =>{
        switch (activeSection) {
            case 'Nota':
                return <Pizarra/>;

            case 'Grupo':
            return <CreateGroup/> 
            
            case 'Recurso':
            return 'Recurso';

            case 'Podcast':
            return 'Podcast';           

            default:
            return <CreateGroup/> 
        }
    }


    return(
        <aside className={styles.selectorTab}>   
            <Slider >
                <TabControl text='Crear Grupo' fn={() => choiseSection("Grupo")} />
                <TabControl text='Crear Nota' fn={() => choiseSection("Nota")} />
                <TabControl text='Crear Recurso'fn={() => choiseSection("Recurso")} />
                <TabControl text='Crear Podcast' fn={() => choiseSection("Podcast")} />
            </Slider>

            <section className={styles.content}>
                {renderContent()}
            </section>            
        </aside>
    )
}

export default SelectorTab;