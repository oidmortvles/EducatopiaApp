import HorizontalCard from '@/app/components/HorizontalCard';
import styles from './ContainerRecurses.module.css';

const ContainerRecurses : React.FC = () =>{
    return(
        <section className={styles.containerRecurses}>
            <HorizontalCard img='' text='ASDASD' tittle='Los Literatos' to='#' />
            <HorizontalCard img='' text='ASDASD' tittle='Ingleses de Mierda' to='#' />
            <HorizontalCard img='' text='ASDASD' tittle='San Martin' to='#' />
            <HorizontalCard img='' text='ASDASD' tittle='Los Literatos' to='#' />
            <HorizontalCard img='' text='ASDASD' tittle='Ingleses de Mierda' to='#' />
            <HorizontalCard img='' text='ASDASD' tittle='San Martin' to='#' />
        </section>
    )
}

export default ContainerRecurses;