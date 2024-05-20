
import Container from 'react-bootstrap/Container';
import HomeButton0 from './HomeButton0.png'
import HomeButton1 from './HomeButton1.png'
import HomeButton2 from './HomeButton2.png'
import HomeButton3 from './HomeButton3.png'
import HomeButton4 from './HomeButton4.png'
import HomeButton5 from './HomeButton5.png'
import './imagenesMasCss.css';


function Imagenes1() {
  return (
    <Container className='custom-container'>
       <a  href="#" target="_blank" rel="GameNew1">
        <img className='custom-img'src={HomeButton0} alt='Juego1' />
      </a>
      <a href="#" target="_blank" rel="GameNew2">
        <img className='custom-img' src={HomeButton1} alt='Juego2' />
      </a><a href="#" target="_blank" rel="GameNew3">
        <img className='custom-img' src={HomeButton2} alt='Juego3' />
      </a><a href="#" target="_blank" rel="GameNew4">
        <img className='custom-img' src={HomeButton3} alt='Juego4' />
      </a><a href="#" target="_blank" rel="GameNew5">
        <img className='custom-img' src={HomeButton4} alt='Juego5' />
      </a><a href="#" target="_blank" rel="GameNew6">
        <img className='custom-img' src={HomeButton5} alt='Juego6' />
      </a>

    </Container>
  );
}

export default Imagenes1;