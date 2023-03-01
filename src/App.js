import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return <BrowserRouter>

  <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/Skills" element={ <Skills /> } />
    <Route path="/contact" element={ <Contact /> } />
    <Route path="*" element={ <Error/> } />
  </Routes>
 
</BrowserRouter>
  
}

export default App;
