import "./App.css";
import "./views/Home/mediaquerys.css";

import NavBar from "./views/NavBar/NavBar";
import Landing from "./views/Home/Landing/index";
import AboutUs from "./views/Home/AboutUs/AboutUs";
import Services from "./views/Home/Services/Services";
import Brand from "./views/Home/Brands/Brands";
import Contact from "./views/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Landing />
        <AboutUs />
        <Services />
        <Brand />
        <Contact />
      </>
    </div>
  );
}

export default App;
