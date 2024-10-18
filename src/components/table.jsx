import { useEffect, useState } from "react";
import axios from "axios"; // Supondo que você está usando axios

export default function DataTable() {
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/earningsDatabase', {
          withCredentials: true, // Se você precisar enviar cookies
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Supondo que o token está no localStorage
          }
        });

        console.log('Response data:', response.data.data); // Verifique o que está sendo retornado pela API
        setPlayerData(response.data.data); // Suponha que os dados estejam dentro do campo 'data'
      } catch (error) {
        setError("Erro ao carregar os dados.");
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <pre>{JSON.stringify(playerData, null, 2)}</pre>
    </div>
  );
}
 