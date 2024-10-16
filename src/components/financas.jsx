import { useState, useEffect } from 'react';
import InputDefault from './inputsDefault';
import BtnDefault from './btn-default';
import axios from 'axios';
import Alert from './alert';

export default function Financas() {
    const [nameExpense, setNameExpense] = useState('');
    const [expense, setExpense] = useState('');
    const [totalExpense, setTotalExpense] = useState('');
    const [ganho, setGanho] = useState('');
    const [ganhoTotal, setGanhoTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const converterZentEmReal = (valor) => {
        const valorConvertido = valor * 0.55 / 1000000;
        return valorConvertido.toFixed(2).replace('.', ',');
    };

    const fetchExpenses = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://server-rag.vercel.app/bankEspenseResult', { withCredentials: true });
            setTotalExpense(Number(response.data.total_expense));
        } catch (error) {
            setError("Erro ao carregar os dados do mês.");
        } finally {
            setLoading(false);
        }
    };

    const fetchGanhosMes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://server-rag.vercel.app/bankResult', { withCredentials: true });
            setGanhoTotal(Number(response.data.total_zeny)); 
        } catch (error) {
            setError("Erro ao carregar os ganhos do mês.");
        } finally {
            setLoading(false);
        }
    };

    const expenses = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const expenseNum = Number(expense);
            const response = await axios.post('https://server-rag.vercel.app/bankExpenses', { ganho: expenseNum, nameExpense }, { withCredentials: true });
    
            if (response.status === 201) {
                console.log("Função executada com sucesso");
                await fetchGanhosMes();
                await fetchExpenses();
                setExpense('');
                setNameExpense(''); 
            } else {
                setError("Falha ao realizar o depósito.");
            }
        } catch (error) {
            setError("Erro ao realizar o depósito.");
        } finally {
            setLoading(false);
        }
    };

    const deposit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const ganhoNum = Number(ganho);
            const response = await axios.post('https://server-rag.vercel.app/bankDeposit', { ganho: ganhoNum }, { withCredentials: true });
    
            if (response.status === 201) {
                await fetchGanhosMes();
                await fetchExpenses();
                setGanho('');
            } else {
                setError("Falha ao realizar o depósito.");
            }
        } catch (error) {
            setError("Erro ao realizar o depósito.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGanhosMes();
        fetchExpenses();
    }, []);

    const monthlyExpenses = totalExpense; // Use o estado totalExpense já carregado

    const monthlyResult = (value) => {
        const newValue = value - monthlyExpenses; // Corrigido para definir newValue
        return newValue;
    };

    return (
        <div className='mt-8 text-center'>
            <Alert errorMessage={error} />
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-xl tracking-widest text-slate-300">
                        LUCRO DO MÊS / ZENY
                    </h1>
                    <h2 className="font-tungstenMedium text-2xl tracking-widest text-slate-300">
                        {loading ? 'Carregando...' : `Z$ ${monthlyResult(ganhoTotal).toLocaleString()}`}
                    </h2>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-xl tracking-widest text-slate-300">
                        LUCRO DO MÊS / REAL
                    </h1>
                    <h2 className="font-tungstenMedium text-2xl tracking-widest text-slate-300">
                        {loading ? 'Carregando...' : `R$ ${converterZentEmReal(ganhoTotal)}`}
                    </h2>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center mt-5">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-2xl text-slate-300 mb-5">
                        ADICIONAR GANHOS DIÁRIO
                    </h1>
                    <form onSubmit={deposit} className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault
                            isFixedWidth={true}
                            type={"number"}
                            onChange={(e) => setGanho(e.target.value)}
                            value={ganho}
                        />
                        <BtnDefault
                            type={"submit"}
                            text={'ADICIONAR VALOR'}
                        />
                    </form>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-2xl text-slate-300 mb-5">GASTOS DESSE MÊS</h1>
                    <form onSubmit={expenses} className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault 
                            placeholder={'NOME DA DESPESA'}
                            value={nameExpense}
                            onChange={(e) => setNameExpense(e.target.value)}
                        />
                        <InputDefault
                            isFixedWidth={true}
                            placeholder={'VALOR'} 
                            type={"number"}
                            value={expense}
                            onChange={(e) => setExpense(e.target.value)}
                        />
                        <BtnDefault text={'ADICIONAR VALOR'} functionality={expenses} />
                    </form>
                </div>
            </div>
        </div>
    );
}
