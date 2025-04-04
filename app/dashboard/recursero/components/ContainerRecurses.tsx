"use client"
import HorizontalCard from '@/app/components/HorizontalCard';
import styles from './ContainerRecurses.module.css';
import useFilters from '@/app/storage/filters';
import Marcador from './Marcador';

const ContainerRecurses : React.FC = () =>{

    const {filter} = useFilters();

    return(
        <section className={styles.containerRecurses}>

            <h4 className={styles.notion}>
                <Marcador/>
                Resultados de la categoría: <span>{filter}</span>
            </h4>

            <aside className={styles.results}>
                <HorizontalCard img='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipjBYuBBT6RzbzQNZReraqElcMHxZqH0F7ok7QBEJ-ufdyxdbw1q1sTRyDmfgAi26_84PMEHHFrwq8GsRqBAhinEQ_no52q_yxY7h56ImsC5q24yBITjzAdQIkNvhv0gIyxCOTSz-7OPcS/s1600/sabato.jpg' text='ASDASD' tittle='Los Literatos' to='#' />
                <HorizontalCard img='https://canalabierto.com.ar/wp-content/uploads/2023/03/Imagen_satelital_de_las_Islas_Malvinas-e1680288846106.jpeg' text='ASDASD' tittle='Malvinas Argentinas' to='#' />
                <HorizontalCard img='https://imagenes.elpais.com/resizer/v2/WXR6YRU3EZDZ3JU23MZV2P4FHI.jpg?auth=16c43ff6d62626b3ade482315d23dcba5a30460d0a81612e0778a481f79a8739&width=414' text='ASDASD' tittle='Siglo XVI' to='#' />
                <HorizontalCard img='https://posgrado.pucp.edu.pe/wp-content/uploads/2021/10/Fisica-2.png' text='ASDASD' tittle='Tecnologia & Ciencia' to='#' />

                <HorizontalCard img='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipjBYuBBT6RzbzQNZReraqElcMHxZqH0F7ok7QBEJ-ufdyxdbw1q1sTRyDmfgAi26_84PMEHHFrwq8GsRqBAhinEQ_no52q_yxY7h56ImsC5q24yBITjzAdQIkNvhv0gIyxCOTSz-7OPcS/s1600/sabato.jpg' text='ASDASD' tittle='Los Literatos' to='#' />
                <HorizontalCard img='https://canalabierto.com.ar/wp-content/uploads/2023/03/Imagen_satelital_de_las_Islas_Malvinas-e1680288846106.jpeg' text='ASDASD' tittle='Malvinas Argentinas' to='#' />
                <HorizontalCard img='https://imagenes.elpais.com/resizer/v2/WXR6YRU3EZDZ3JU23MZV2P4FHI.jpg?auth=16c43ff6d62626b3ade482315d23dcba5a30460d0a81612e0778a481f79a8739&width=414' text='ASDASD' tittle='Siglo XVI' to='#' />
                <HorizontalCard img='https://posgrado.pucp.edu.pe/wp-content/uploads/2021/10/Fisica-2.png' text='ASDASD' tittle='Tecnologia & Ciencia' to='#' />

                <HorizontalCard img='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipjBYuBBT6RzbzQNZReraqElcMHxZqH0F7ok7QBEJ-ufdyxdbw1q1sTRyDmfgAi26_84PMEHHFrwq8GsRqBAhinEQ_no52q_yxY7h56ImsC5q24yBITjzAdQIkNvhv0gIyxCOTSz-7OPcS/s1600/sabato.jpg' text='ASDASD' tittle='Los Literatos' to='#' />
                <HorizontalCard img='https://canalabierto.com.ar/wp-content/uploads/2023/03/Imagen_satelital_de_las_Islas_Malvinas-e1680288846106.jpeg' text='ASDASD' tittle='Malvinas Argentinas' to='#' />
                <HorizontalCard img='https://imagenes.elpais.com/resizer/v2/WXR6YRU3EZDZ3JU23MZV2P4FHI.jpg?auth=16c43ff6d62626b3ade482315d23dcba5a30460d0a81612e0778a481f79a8739&width=414' text='ASDASD' tittle='Siglo XVI' to='#' />
                <HorizontalCard img='https://posgrado.pucp.edu.pe/wp-content/uploads/2021/10/Fisica-2.png' text='ASDASD' tittle='Tecnologia & Ciencia' to='#' />

                <HorizontalCard img='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipjBYuBBT6RzbzQNZReraqElcMHxZqH0F7ok7QBEJ-ufdyxdbw1q1sTRyDmfgAi26_84PMEHHFrwq8GsRqBAhinEQ_no52q_yxY7h56ImsC5q24yBITjzAdQIkNvhv0gIyxCOTSz-7OPcS/s1600/sabato.jpg' text='ASDASD' tittle='Los Literatos' to='#' />
                <HorizontalCard img='https://canalabierto.com.ar/wp-content/uploads/2023/03/Imagen_satelital_de_las_Islas_Malvinas-e1680288846106.jpeg' text='ASDASD' tittle='Malvinas Argentinas' to='#' />
                <HorizontalCard img='https://imagenes.elpais.com/resizer/v2/WXR6YRU3EZDZ3JU23MZV2P4FHI.jpg?auth=16c43ff6d62626b3ade482315d23dcba5a30460d0a81612e0778a481f79a8739&width=414' text='ASDASD' tittle='Siglo XVI' to='#' />
                <HorizontalCard img='https://posgrado.pucp.edu.pe/wp-content/uploads/2021/10/Fisica-2.png' text='ASDASD' tittle='Tecnologia & Ciencia' to='#' />

                <HorizontalCard img='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipjBYuBBT6RzbzQNZReraqElcMHxZqH0F7ok7QBEJ-ufdyxdbw1q1sTRyDmfgAi26_84PMEHHFrwq8GsRqBAhinEQ_no52q_yxY7h56ImsC5q24yBITjzAdQIkNvhv0gIyxCOTSz-7OPcS/s1600/sabato.jpg' text='ASDASD' tittle='Los Literatos' to='#' />
                <HorizontalCard img='https://canalabierto.com.ar/wp-content/uploads/2023/03/Imagen_satelital_de_las_Islas_Malvinas-e1680288846106.jpeg' text='ASDASD' tittle='Malvinas Argentinas' to='#' />
                <HorizontalCard img='https://imagenes.elpais.com/resizer/v2/WXR6YRU3EZDZ3JU23MZV2P4FHI.jpg?auth=16c43ff6d62626b3ade482315d23dcba5a30460d0a81612e0778a481f79a8739&width=414' text='ASDASD' tittle='Siglo XVI' to='#' />
                <HorizontalCard img='https://posgrado.pucp.edu.pe/wp-content/uploads/2021/10/Fisica-2.png' text='ASDASD' tittle='Tecnologia & Ciencia' to='#' />
            </aside>
        </section>
    )
}

export default ContainerRecurses;