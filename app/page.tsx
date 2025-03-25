import stlyes from './home.module.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Community from './components/Community';
import ButtonAction from './components/ButtonAction';


const Home : React.FC = () =>{
  return(
    <main className={stlyes.home}>
      <Nav/>
      
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
  )
}


export default Home;