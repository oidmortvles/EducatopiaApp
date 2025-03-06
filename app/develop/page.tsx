import stlyes from '../home.module.css';
import ButtonAction from '../components/ButtonAction';
import Community from '../components/Community';
import Content from '../components/Content';
import Header from '../components/Header';
import Nav from '../components/Nav';

const Home : React.FC = () =>{
  return(
    <>
    <Nav/>
    <main className={stlyes.home}>
      
      <Header/>
      <Content/>
      <Community/>     
      
      
      <div className={stlyes.dv}>
            <ButtonAction colorSet={1} text='Subscribirse' />
            <ButtonAction colorSet={2} text='+ Info' />
            <ButtonAction colorSet={3} text='ACTION' />
            <ButtonAction colorSet={0} text='ACTION' />
      </div>
    

    </main>
    </>
  )
}


export default Home;