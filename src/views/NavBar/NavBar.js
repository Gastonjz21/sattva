import "./navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import Records from '../records.json'
import BurguerButton from "../BurguerButton/BurguerButton";

function NavBar() {

  //CAMBIO DE COLOR CUANDO SE HACE SCROLL
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  //CONFIGURACION BARRA DE NAVEGACION
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //CUANDO ESTA TRUE LO PASA A FALSE Y VICE VERSA
    setClicked(!clicked)
  }

  const handleClose = () => {
    //CUANDO ESTA TRUE LO PASA A FALSE Y VICE VERSA
    setClicked(false)
  }

  return (
    <>
    <div id="menu" className={color ? 'navegacion navegacion-bg' : 'navegacion'}>
      <div className="inner">
        {Records &&
          Records.map((record) => {
            return (
              <Link to="landing" spy={true} smooth={true} duration={500}>
                <img src={record.icon} alt="" className="logo" />
              </Link>
            );
          })}
      </div>

      <div className={`links ${clicked ? 'active' : ''}`}>
          <ul className={` ${clicked ? 'active' : ''}`}>
            <li> 
              <Link to="landing" onClick={handleClose} spy={true} smooth={true} offset={-10} duration={500}>Home</Link> 
            </li>

            <li> 
              <Link to="nosotros" onClick={handleClose} spy={true} smooth={true} offset={-100} duration={500}>Nosotros</Link> 
            </li>

            <li> 
              <Link to="services" onClick={handleClose} spy={true} smooth={true} offset={-100} duration={500}>Servicios</Link> 
            </li>

            <li>
              <Link to="marcas" onClick={handleClose} spy={true} smooth={true} offset={-80} duration={500}>Marcas</Link>
            </li>

            <li>
              <Link to="contact" onClick={handleClose} spy={true} smooth={true} offset={-80} duration={500}>Contacto</Link>
            </li>
          </ul>

      </div>

      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick}/>
      </div>

      <div className={`initial ${clicked ? 'active' : ''}`}></div>

    </div>
    </>
  );
}

export default NavBar;