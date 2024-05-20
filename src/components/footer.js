
import React from 'react';
import './footerMasCss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
//Nuevo


// Crear un elemento <link> para cargar Font Awesome
const link = document.createElement('link');
link.rel = 'stylesheet'; // Definir el tipo de enlace como hoja de estilos
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'; // URL del CDN de Font Awesome
document.head.appendChild(link); // Agregar el elemento <link> al <head> del documento


// import { Container, Row, Col } from 'react-bootstrap';

function RedesSociales() {
    const enlaces = [
        { href: 'https://www.facebook.com/UNIVERSAE/'},
        { href: 'https://www.instagram.com/_universae/?hl=es'},
        { href: 'https://www.youtube.com/c/UNIVERSAE_FP'},
        { href: 'https://www.youtube.com/c/UNIVERSAE_FP'},
        { href: 'https://www.linkedin.com/school/universae'},
        { href: 'https://www.tiktok.com/@_universae'},
        { href: 'https://twitter.com/_Universae'},
        { href: 'https://universae.com/'}
    ];

    return (
        <div className="redes">
            {enlaces.map(({ href}) => (
                <SocialIcon url={href} className='custom-social-media-icon'/>
            ))}
        </div>
    );
}

export default RedesSociales;