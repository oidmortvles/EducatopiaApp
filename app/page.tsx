import stlyes from './home.module.css';
import Nav from './components/Nav';
import Header from './components/Header';
import ButtonAction from './components/ButtonAction';
import Content from './components/Content';
import Community from './components/Community';

const Home : React.FC = () =>{
  return(
    <>
    {/* <Nav/> */}
    <main className={stlyes.home}>
      
      {/* <Header/>
      <Content/>
      <Community/>     
      
      
      <div className={stlyes.dv}>
            <ButtonAction colorSet={1} text='Subscribirse' />
            <ButtonAction colorSet={2} text='+ Info' />
            <ButtonAction colorSet={3} text='ACTION' />
            <ButtonAction colorSet={0} text='ACTION' />
      </div> */}

      <div className={stlyes.helloWord}>
        <img src="./logo.png" alt="" width={300} height={"auto"}/>
        <div className={stlyes.textBox}>
          <h1>EDUCATOPIA</h1>
          <p>Estamos trabajando en este proyecto. Próximamente anunciaremos el lanzamiento!</p>
        </div>

      </div>
    

    </main>
    </>
  )
}


export default Home;