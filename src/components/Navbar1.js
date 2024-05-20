import LogoUniversae from './LogoUniversae.png';
import './Navbar1MasCss.css'; 


function Cabecera() {
  return (
    
    <div className='encabezado1' > 
      <a href="https://universae.com/">
        <img className='custon-img' src={LogoUniversae}/>
            </a>
    </div>
   
  );
}

export default Cabecera;

