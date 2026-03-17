import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/portfolio/:category" element={<Portfolio />} />
      
    </Routes>
  );
}

export default App;
