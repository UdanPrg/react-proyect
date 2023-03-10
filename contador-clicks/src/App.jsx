import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = ()=> {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = ()=> {
    // console.log('Reiniciar');
    setNumClics(0);
  };


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClics} />
        <Boton 
          text='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          text='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
