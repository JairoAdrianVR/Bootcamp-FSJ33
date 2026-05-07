import './App.css'
import Chauchis from './components/Chauchis';

function App() {
  let nombre = "Ciro";

  //Con {} NOSOTROS PODEMOS ACCEDER A LOS VALORES DE JS DENTRO DEL RETURN DE JSX
  //TODO LO QUEREMOS QUE SE VEA, SE TIENE QUE LLAMAR Y MOSTRAR EN EL APP EN SU RETURN
  return <>
    <h1>Holiwis {nombre}</h1>
    <Chauchis name={nombre} lastName="Vega" />
    
  </>
}


export default App
