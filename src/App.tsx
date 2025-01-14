import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/"  Component={Portfolio} />
      </Routes>
    </Router>
  );
};

export default App;
