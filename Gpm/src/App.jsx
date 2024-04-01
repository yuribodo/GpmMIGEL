import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Equipe from './components/Equipe/Equipe';
import PropostaMER from './components/PropotaMER/PropostaMER';
import DescricaoProblema from './components/DescricaoProblema/DescricaoProblema';
import AnaliseRequisitos from './components/AnaliseRequisitos/AnaliseRequisitos';
import Todos from './components/Todos/Todos';

// Componentes de exemplo para as rotas


function App() {
 const [count, setCount] = useState(0);

 return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/home" element={<Todos />} />
          <Route path="/equipe" element={<Equipe/>} />
          <Route path="/descricaodoproblema" element={<DescricaoProblema/>} />
          <Route path="/analisederequisitos" element={<AnaliseRequisitos/>} />
          <Route path="/propostademer" element={<PropostaMER/>} />
          
        </Routes>
        
        
      </div>
    </Router>
 );
}

export default App;
