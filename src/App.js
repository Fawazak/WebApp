import Navbar from "./components/NavBar/navbar"
import Skills from "./components/Skills/skills";
import Intro from "./components/intro"
import Contact from "./components/Contact/contact"
import Portfolio from "./components/Portfolio/portfolio"
import About from "./components/About/about"
function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Intro/>
     <About/>
     <Skills/>
     <Portfolio/>
     <Contact/>
     
     
    </div>
  );
}

export default App;
