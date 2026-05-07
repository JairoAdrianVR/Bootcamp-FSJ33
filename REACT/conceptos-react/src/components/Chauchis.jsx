//Creamos nuestro primer componente de React

function Chauchis(props){
 
  return <>
      <h2>Chauchis {props.name}</h2>
      <h2>Chauchis {props.lastName}</h2>
  </>
  
}

export default Chauchis;