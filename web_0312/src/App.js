import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Home';
import Home from './Menu';
import Sobre from './Sobre';

function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
