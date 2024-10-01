import { useState, useEffect } from 'react';
import InputDefault from './inputs';
import BtnCustom from './btn-custom';

export default function Financas() {
    const [ganho, setGanho] = useState(''); // Valor do input
    const [ganhoTotal, setGanhoTotal] = useState(0); // Valor total acumulado

    // Função para armazenar no localStorage somando o valor atual com o novo valor
    const adicionarGanho = () => {
        const novoGanho = parseInt(ganho, 10);

        if (!isNaN(novoGanho)) {
            const ganhoExistente = localStorage.getItem('ganhoDiario');
            const ganhoTotal = ganhoExistente ? parseInt(ganhoExistente, 10) + novoGanho : novoGanho;

            localStorage.setItem('ganhoDiario', ganhoTotal);
            setGanhoTotal(ganhoTotal); // Atualiza o estado do ganho total
            alert(`Ganho atualizado para ${ganhoTotal.toLocaleString()} Z$!`);
        } else {
            alert('Por favor, insira um valor válido.');
        }
    };

    // Recupera o valor do localStorage ao carregar o componente
    useEffect(() => {
        const ganhoExistente = localStorage.getItem('ganhoDiario');
        if (ganhoExistente) {
            setGanhoTotal(parseInt(ganhoExistente, 10)); // Atualiza o estado com o valor armazenado
        }
    }, []);

    return (
        <div className='mt-8'>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-impact tracking-widest text-base text-slate-300">
                        LUCRO DO MÊS / ZENY
                    </h1>
                    {/* Exibe o ganho total formatado */}
                    <h2 className="font-impact tracking-widest text-xl text-slate-300">
                        Z$ {ganhoTotal.toLocaleString()} {/* Formata com separador de milhar */}
                    </h2>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-impact tracking-widest text-base text-slate-300">
                        LUCRO DO MÊS / REAL
                    </h1>
                    <h2 className="font-impact tracking-widest text-xl text-slate-300">
                        R$
                    </h2>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center mt-5">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-semibold text-slate-300 mb-5">
                        ADICIONAR GANHOS DIÁRIO
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault
                            text={'Z$'}
                            onChange={(e) => setGanho(e.target.value)} // Atualiza o estado
                        />
                        <BtnCustom
                            text={'ADICIONAR VALOR'}
                            functionality={adicionarGanho} // Passa a função via 'functionality'
                        />
                    </div>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-semibold text-slate-300 mb-5">GASTOS DESSE MÊS</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault text={'INVESTIMENTO'} />
                        <InputDefault text={'Z$'} />
                        <BtnCustom text={'ADICIONAR VALOR'} functionality={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
}
