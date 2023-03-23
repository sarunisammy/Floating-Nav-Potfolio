
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Experience from './component/experience/Experience';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Potfolio from './component/potfolio/Potfolio';
import Testimonial from './component/testimonial/Testimonial';
import Services from './component/services/Services';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/> 
      <About/>
      <Experience/>
      <Services/>
      <Potfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
      
     
      
    </div>
  );
}

export default App;
