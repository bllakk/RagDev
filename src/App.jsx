import { useState } from 'react';
import './App.css';

import Nav from './components/nav';
import Financas from './components/financas.jsx';
import Calculadora from './components/calculadora.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState('calculadora'); // Estado para controlar o componente ativo

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="bg-slate-800 w-full h-screen min-h-screen overflow-x-hidden">
      <Nav onButtonClick={handleButtonClick} /> {/* Passa a função para o Nav */}
      <div>
        {activeComponent === 'calculadora' && <Calculadora />} {/* Renderiza Condicionalmente */}
        {activeComponent === 'financas' && <Financas />}
      </div>
    </div>
  );
}

export default App;
