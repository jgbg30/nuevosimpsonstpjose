import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./componentes/Navbar";
import Blog from './Pages/Blog/Blog';
import Contacto from './Pages/Contacto/Contacto';
import Inicio from './Pages/Inicio/Inicio';
import Footer from "./componentes/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;


