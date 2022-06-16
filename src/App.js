import Navbar from './componentes/Navbar';
import Cards from './componentes/Cards';
import Footer from './componentes/Footer';
import Centro from './componentes/Centro';

function App() {
  return (
    <div className="container">
      
      <Navbar />
      <Centro/>
      
      <Cards />
      <Footer />
    </div>
  );
}

export default App;


