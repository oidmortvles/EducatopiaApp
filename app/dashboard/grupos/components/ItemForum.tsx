import ButtonAction from '@/app/components/ButtonAction'
import styles from './ItemForum.module.css'

type ForumProps ={
    ForumID: number,
    Name: string,
    Description: string,
    CreateDate: string,
    Status: string,
}

type ItemForumProps = {
    grupo : ForumProps
}

const ItemForum : React.FC <ItemForumProps> = ({grupo}) =>{

    //=> FORMATEAR FECHA
    const date = new Date(grupo.CreateDate);
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0') // los meses van de 0 a 11
    const year = String(date.getFullYear())
    const fecha = `${day}-${month}-${year}`

    //=> FORMATEAR ESTADO
    const status = grupo.Status == "A" ? 'Activo' : 'Inactivo';

    return(
        <figure className={styles.itemForum}>
            <header className={styles.header}>
                <p>CREADO: {fecha}</p>
                <p>ESTADO: {status}</p>
            </header>
            
            <div className={styles.content}>
                <h3>{grupo.Name}</h3>
                <p>{grupo.Description}</p>            
            </div>

            <div className={styles.button}>
                <ButtonAction colorSet={1} text='Visitar Grupo' to='#'/>
            </div>
        </figure>
    )
}

export default ItemForum;