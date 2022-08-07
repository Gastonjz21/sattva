import './landing.css'
import NavBar from '../../NavBar/NavBar';


function Landing(){
    return(

        <header>
        <div class="cabecera">
            <a href="#banner" class="lyrics-logo">Sattva</a>
            <button class="nav-toggle" aria-label="Abrir Menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>

        <NavBar/>
        </header>
    )
}
export default Landing;