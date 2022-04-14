import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import React from "react"
import { Presentation } from './components/Presentation/Presentation';
import { Tecnologias } from './components/tecnologias/Tecnologias';

function App() {
  return (
    <div className="App">
      <div className='contenedor-inicio'>
      <NavBar/>
      <Presentation/>
      </div>
      <Tecnologias/>
    </div>
  );
}

export default App;
