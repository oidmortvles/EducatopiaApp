"use client"
import styles from './SelectorTab.module.css'
import Slider from '@/app/components/Slider';
import TabControl from './TabControl';
import { useState } from 'react';
import Pizarra from './Pizarra';
import CreateGroup from './CreateGroup';
import DeleteGroup from './DeleteGroup';

const SelectorTab : React.FC = () =>{
    const [activeSection, setActiveSection] = useState("");

    //=> FUNCION PARA ELEGIR TAB
    const choiseSection = (section: string) => {
        setActiveSection(section);
    }

    //=> FUNCION PARA RENDERIZAR TAB
    const renderContent = () =>{
        switch (activeSection) {
            case 'Grupo':
            return <CreateGroup/> 

            case 'BorrarGrupo':
                return <DeleteGroup/>;  

            case 'Nota':
                return <Pizarra/>;          

            default:
            return <CreateGroup/> 
        }
    }


    return(
        <aside className={styles.selectorTab}>   
            <Slider >
                <TabControl text='Crear Grupo' fn={() => choiseSection("Grupo")} />
                <TabControl text='Eliminar Grupo' fn={() => choiseSection("BorrarGrupo")} />
                <TabControl text='Subir Contenido' fn={() => choiseSection("Nota")} />
            </Slider>

            <section className={styles.content}>
                {renderContent()}
            </section>            
        </aside>
    )
}

export default SelectorTab;