import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import React from "react"
import { Presentation } from './components/Presentation/Presentation';
import { Tecnologias } from './components/tecnologias/Tecnologias';
import { SobreMi } from './components/SobreMi/SobreMi';
import { Pestaña } from './components/pestaña/Pestaña';

function App() {
  return (
    <div className="App">
      <Pestaña></Pestaña>
      <div className='contenedor-inicio'>
      <NavBar/>
      <Presentation/>
      </div>
      <SobreMi/>
      <Tecnologias/>
    </div>
  );
}

export default App;
