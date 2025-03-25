import styles from './HeaderProfile.module.css';
import TabsData from './TabsData';

const HeaderProfile : React.FC = () =>{
    return(
        <header className={styles.headerProfile}>
            <div className={styles.imgHeader}>
            </div>

            <section className={styles.dataBox}>
                <h3 className={styles.welcome}>Hola Lucia!</h3>
                <div className={styles.personalData}>
                    <TabsData tittle='Nombre' data='Lucia Santos'/>
                    <TabsData tittle='Usuario' data='LuciaLu'/>
                    <TabsData tittle='Email' data='Lucia.santos@gmail.com'/>
                    <TabsData tittle='Profesion' data='Docente de Biologia'/>
                    <TabsData tittle='Cumpleaños' data='02/08/00'/>
                    <TabsData tittle='Localidad' data='Buenos Aires'/>
                </div>
                
            </section>

        </header>
    )
}


export default HeaderProfile;