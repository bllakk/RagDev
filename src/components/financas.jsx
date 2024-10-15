import { useState, useEffect } from 'react';
import InputDefault from './inputsDefault';
import BtnDefault from './btn-default';

export default function Financas() {
    const [ganho, setGanho] = useState(''); 
    const [ganhoTotal, setGanhoTotal] = useState(0); // 

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
    useEffect(() => {
        const ganhoExistente = localStorage.getItem('ganhoDiario');
        if (ganhoExistente) {
            setGanhoTotal(parseInt(ganhoExistente, 10)); // Atualiza o estado com o valor armazenado
        }
    }, []);

    const converterZentEmReal = (valor) => {
        const valorConvertido = valor * 0.55 / 1000000;

        return valorConvertido.toFixed(2).replace('.', ',');
    }

    return (
        <div className='mt-8'>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-xl tracking-widest text-slate-300">
                        LUCRO DO MÊS / ZENY
                    </h1>
                    <h2 className="font-tungstenMedium text-2xl tracking-widest text-slate-300">
                        Z$ {ganhoTotal.toLocaleString()}
                    </h2>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-xl tracking-widest text-slate-300">
                        LUCRO DO MÊS / REAL
                    </h1>
                    <h2 className="font-tungstenMedium text-2xl tracking-widest text-slate-300">
                        R$ {converterZentEmReal(ganhoTotal.toFixed(2))}
                    </h2>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center mt-5">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-2xl text-slate-300 mb-5">
                        ADICIONAR GANHOS DIÁRIO
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault
                            text={'Z$'}
                            isFixedWidth={true}
                            onChange={(e) => setGanho(e.target.value)}
                        />
                        <BtnDefault
                            text={'ADICIONAR VALOR'}
                            functionality={adicionarGanho} // Passa a função via 'functionality'
                        />
                    </div>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-tungstenMedium text-2xl text-slate-300 mb-5">GASTOS DESSE MÊS</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault text={'INVESTIMENTO'} />
                        <InputDefault type={'number'} text={'Z$'} />
                        <BtnDefault text={'ADICIONAR VALOR'} functionality={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
}
