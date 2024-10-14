import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/nav';
import Calculadora from '../components/calculadora';
import Financas from '../components/financas';







export default function Home() {


  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('authToken'); // Pegando o token do localStorage
      if (!token) {
        // Se o token não existir, redireciona imediatamente para a página de login
        navigate('/');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/home', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });

        if (response.status === 200 && response.data.message) {
        } else {
          throw new Error('Token inválido');
        }
      } catch (error) {
        localStorage.removeItem('authToken');
        navigate('/');
      }
    };

    verifyToken();
  }, [navigate]);

  const [activeComponent, setActiveComponent] = useState('calculadora'); // Estado para controlar o componente ativo

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };


  return (
    <div className='bg-dark-blue-0 h-screen overflow-x-hidden'>
      <Nav onButtonClick={handleButtonClick} />
      <div>
      {activeComponent === 'calculadora' && <Calculadora />}
      {activeComponent === 'financas' && <Financas />}
        </div>
    </div>
  );
}
