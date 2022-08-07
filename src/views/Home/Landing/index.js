import "./landing.css";
import NavBar from "../../NavBar/NavBar";
import Records from '../../records.json'
import { Link } from "react-scroll";

function Landing() {
  return (
    <>
      <header>
        <div class="cabecera">

          <button class="nav-toggle" aria-label="Abrir Menu">
            <i class="fas fa-bars"></i>
          </button>

        </div>

        <div className='inner'>
          {
            Records && Records.map(  record => {
              return(
                  <Link to="banner" spy={true} smooth={true} duration={500}>
                    <img src={ record.icon } alt="" className="logo"/>
                  </Link>
                  

              )
            })
          }
        </div>

        <NavBar />
      </header>

      <div id="banner" class="contain">
                <div class="layer layer1"></div>
                <div class="layer layer2"></div>
                <div class="layer layer3"></div>
                <div class="layer layer4"></div>
                <div class="layer layer5"></div>
                <div class="layer layer6"></div>
                <div class="layer layer7"></div>
                <div class="layer layer8"></div>
                <div class="layer layer9"></div>
        </div>
    </>
  );
}
export default Landing;
