import { useState } from 'react';
import './App.css';

import Nav from './components/nav';
import InputDiv from './components/inputdiv.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-800 w-screen h-screen">
      <Nav />
      <div>
          <InputDiv/>
      </div>
    </div>
  );
}

export default App;
