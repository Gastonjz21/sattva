import "./navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import Records from '../records.json'
import BurguerButton from "../BurguerButton/BurguerButton";

function NavBar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //CUANDO ESTA TRUE LO PASA A FALSE Y VICE VERSA
    setClicked(!clicked)
  }
  
  return (
    <>
    <div id="menu" class="navegacion">
      <div className="inner">
        {Records &&
          Records.map((record) => {
            return (
              <Link to="banner" spy={true} smooth={true} duration={500}>
                <img src={record.icon} alt="" className="logo" />
              </Link>
            );
          })}
      </div>

      <div className={`links ${clicked ? 'active' : ''}`}>
          <ul className={` ${clicked ? 'active' : ''}`}>
            <li> 
              <Link to="banner" /*onClick={handleClick}*/ spy={true} smooth={true} offset={-10} duration={500}>Home</Link> 
            </li>

            <li> 
              <Link to="nosotros" spy={true} smooth={true} offset={-100} duration={500}>Nosotros</Link> 
            </li>

            <li> 
              <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Servicios</Link> 
            </li>

            <li>
              <Link to="marcas" spy={true} smooth={true} offset={-80} duration={500}>Marcas</Link>
            </li>

            <li>
              <Link to="contacto" spy={true} smooth={true} offset={-100} duration={500}>Contacto</Link>
            </li>
                
            <li>
              <a href="/">Productos</a>
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