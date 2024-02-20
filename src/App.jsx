import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Education/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
