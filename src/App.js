import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Navbar from './components/NavBar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
