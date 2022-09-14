
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Customize from './pages/Customize.js';
import Classes from './pages/Classes.js';
import Items from './pages/Items.js';
import Cart from './pages/Cart.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
     <BrowserRouter>
                  <Routes>
                    <Route path ={'/'} element={<Customize />} />
                     <Route path={'/Classes'} element={<Classes />} />
                     <Route path={'/Items'} element={<Items />} />
                     <Route path={'/cart'} element={<Cart />} />
                  </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;