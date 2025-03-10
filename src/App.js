import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import './App.css';
import './assets/styles/global.css'; // Import the global CSS file

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header appears on every page */}
        <Header />
        
        {/* Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;