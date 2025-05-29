import styles from './HeaderProfile.module.css';
import TabsData from './TabsData';


type UserProfile = {
    UserID: number | null,
    Name: string | null,
    LastName: string | null,
    Email: string | null,
    Password: string | null,
    Document: string | null,
    Specialization: string | null,
    EducationLevel: string | null,
    ProfileImg: string | null,
    DateBirth: string | null,
    Province: string | null,
    Locality: string | null,
    RegisterDate: string | null,
    PreApprovalID: string | null,
    Status: string | null,
    Token: string | null,
    ProfileID: number | null
}

type headerProfileProps = {
    data: UserProfile
}

const HeaderProfile : React.FC <headerProfileProps> = ({data}) =>{
    
    return(
        <header className={styles.headerProfile}>
            <div className={styles.imgHeader}>
                {
                    data.ProfileImg && 
                    <img src={data.ProfileImg} alt={`${data.Name} ${data.LastName}`} />
                }           
            </div>

            <section className={styles.dataBox}>
                <div>
                    <h3 className={styles.welcome}>Hola {data.Name}!</h3>
                    <p className={styles.specialization}>{data.EducationLevel} - {data.Specialization}</p>
                </div>
                <div className={styles.personalData}>
                    <TabsData tittle='Nombre' data={`${data.Name} ${data.LastName}`}/>
                    <TabsData tittle='Dni' data={data.Document}/>
                    <TabsData tittle='Email' data={data.Email}/>                    
                    <TabsData tittle='Cumpleaños' data={data.DateBirth}/>
                    <TabsData tittle='Provincia' data={data.Province}/>
                    <TabsData tittle='Localidad' data={data.Locality}/>
                </div>                
            </section>

        </header>
    )
}


export default HeaderProfile;