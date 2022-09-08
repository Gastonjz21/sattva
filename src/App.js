import "./App.css";
import "./views/Home/mediaquerys.css";

import NavBar from "./views/NavBar/NavBar";
import Landing from "./views/Home/Landing/index";
import AboutUs from "./views/Home/AboutUs/AboutUs";
import Services from "./views/Home/Services/Services";
import Brand from "./views/Home/Brands/Brands";
import ContactForm from "./views/Home/Contact/ContactForm";
import Footer from "./views/Footer/Footer";
import Acordeon from "./views/Home/Acordeon/Acordeon";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Landing />
        <AboutUs />
        <Services />
        <Brand />
        <Acordeon/>
        <ContactForm />
        <Footer />
      </>
    </div>
  );
}

export default App;
