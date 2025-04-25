"use client"
import styles from './Notification.module.css';

const Notification : React.FC = () =>{
    return(
        <div role='alert' className={styles.notification}>
            <h2>NOTIFICATION</h2>
        </div>
    )
}

export default Notification;