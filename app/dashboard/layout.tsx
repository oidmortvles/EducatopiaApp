import styles from './dashboard.module.css';
import NavSide from "./components/NavSide";
import Footer from '../components/Footer';

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
      
        <>
        <main className={styles.dashboard}>
            <NavSide/>
            <section className={styles.content}>
                {children}
            </section>           
        </main>
        <Footer/>
        </>

    )
  }