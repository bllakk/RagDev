import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import InputDefault from '../components/inputsDefault';
import BtnDefault from '../components/btn-default';
import Alert from '../components/alert';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    if (!username || !password) {
      setErrorMessage('Username e password são obrigatórios');
      return;
    }
  
    try {
      const response = await axios.post('https://server-rag.vercel.app/login', {
        username,
        password,
      }, { withCredentials: true });
  
      const token = response.data.token;
  
      if (token) {
        localStorage.setItem('authToken', token);
        console.log('Token salvo no localStorage:', token);
        navigate('/RagDev/home');
      } else {
        setErrorMessage('Falha ao obter o token.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('Acesso negado');
        setErrorMessage('Acesso negado');
      } else {
        console.error('Erro durante o login:', error);
        setErrorMessage('Ocorreu um erro, tente novamente.');
      }
    }
  };

  return (
    <div className="bg-dark-blue-0 p-4 w-full h-full min-h-screen flex flex-col justify-center items-center text-center">

  <form onSubmit={handleSubmit} className='bg-dark-blue-1 flex flex-col gap-2 mt-4 px-12 py-8 rounded'>
    <h2 className='text-slate-200 mb-2 font-tungstenMedium text-3xl tracking-wider'>FAZER LOGIN</h2>
    <div>
      <InputDefault
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={"Username"}
      />
    </div>
    <div className='mt-2'>
      <InputDefault
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Password"}
      />
    </div>
    <div>
      <BtnDefault
        type={"submit"}
        text={"ENTRAR"}
      />
    </div>
    <Alert errorMessage={errorMessage} />
  </form>
</div>

  );
};

export default Login;
