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
      try {
        const response = await axios.get('https://server-rag.vercel.app/home', {
          withCredentials: true // Garantindo que os cookies sejam enviados com a requisição
        });

        if (response.status === 200 && response.data.message) {
          console.log(response.data.message); // Acesso bem-sucedido
        } else {
          throw new Error('Token inválido');
        }
      } catch (error) {
        localStorage.removeItem('authToken'); // Remover o token do localStorage se necessário
        navigate('/RagDev'); // Redirecionar para a página de login
      }
    };

    verifyToken();
  }, [navigate]);

  const [activeComponent, setActiveComponent] = useState('calculadora');

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
