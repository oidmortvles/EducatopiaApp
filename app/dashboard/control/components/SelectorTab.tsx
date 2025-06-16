"use client"
import styles from './SelectorTab.module.css'
import Slider from '@/app/components/Slider';
import TabControl from './TabControl';
import { useState } from 'react';
import Pizarra from './Pizarra';
import CreateGroup from './CreateGroup';
import DeleteGroup from './DeleteGroup';
import CreateCategory from './CreateCategory';
import DeleteCategory from './DeleteCategory';

const SelectorTab : React.FC = () =>{
    const [activeSection, setActiveSection] = useState("");

    //=> FUNCION PARA ELEGIR TAB
    const choiseSection = (section: string) => {
        setActiveSection(section);
    }

    //=> FUNCION PARA RENDERIZAR TAB
    const renderContent = () =>{
        switch (activeSection) {
            case 'CrearGrupo':
            return <CreateGroup/> 

            case 'BorrarGrupo':
                return <DeleteGroup/>;  

            case 'CrearCategoria':
                return <CreateCategory/>;  

            case 'BorrarCategoria':
                return <DeleteCategory/>; 

            case 'CrearContenido':
                return <Pizarra/>;          

            default:
            return <CreateGroup/> 
        }
    }


    return(
        <aside className={styles.selectorTab}>   
            <Slider >
                <TabControl text='Crear Grupo' fn={() => choiseSection("CrearGrupo")} />
                <TabControl text='Eliminar Grupo' fn={() => choiseSection("BorrarGrupo")} />
                <TabControl text='Crear Categoría' fn={() => choiseSection("CrearCategoria")} />
                <TabControl text='Eliminar Categoría' fn={() => choiseSection("BorrarCategoria")} />
                <TabControl text='Subir Contenido' fn={() => choiseSection("CrearContenido")} />
            </Slider>

            <section className={styles.content}>
                {renderContent()}
            </section>            
        </aside>
    )
}

export default SelectorTab;