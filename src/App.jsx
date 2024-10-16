import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/RagDev' element={<Login/>}/>
        <Route path='/RagDev/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
