import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>


        <Route path="/"  Component={Home} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
