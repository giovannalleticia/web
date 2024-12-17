import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from "./components/Menu";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Galeria from "./components/Galeria";
import Contato from "./components/Contato";
import Redes from "./components/Redes";

function App() {
  return (
    <Router>
        <Menu/>
          <Routes>
            <Route path='/Home'element={<Home />} />
            <Route path='/Sobre'element={<Sobre />} />
            <Route path='/Galeria'element={<Galeria />} />
            <Route path='/Contato'element={<Contato />} />
          </Routes>
        <Redes/>
    </Router>
  );
}

export default App;
