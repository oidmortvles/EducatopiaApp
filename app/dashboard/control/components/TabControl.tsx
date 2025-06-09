"use client"
import styles from './TabControl.module.css';

type TabControlProps = {
    text:string;
    fn: () => void;
    active?: boolean;
}

const TabControl : React.FC <TabControlProps> = ({text, fn}) =>{
    return(
        <button className={styles.tabControl} onClick={()=> fn()} >
            {text}
        </button>
    )
}

export default TabControl;