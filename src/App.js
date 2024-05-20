import React from 'react';
//import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './components/Navbar1'; /*este si es!*/
import Imagenes1 from './components/imagenes';
import RedesSociales from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecera/>
       
        <Imagenes1/>
       
        <p>Hola Mundo</p>
        
       
        <RedesSociales/>
      </header>
    </div>
  );
}

export default App;
