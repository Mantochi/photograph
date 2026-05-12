import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
  
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/portfolio/:category" element={<Portfolio />} />
      
    </Routes>
  );
}

export default App;
