import stlyes from './home.module.css';

const Home : React.FC = () =>{
  return(
    <>
    {/* <Nav/> */}
    <main className={stlyes.home}>
      
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