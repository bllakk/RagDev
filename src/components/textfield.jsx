import React, { useState, useEffect } from "react";
import InputDefault from "./inputs";
import SelectDefault from "./select";

export default function Textfield({ onTotalChange }) {
    const [nomeItem, setNomeItem] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const Porcentagem = (valorUnitario * 24) / 100;
        const ValorReajustado = Number(valorUnitario) + Porcentagem;
        const novoValorTotal = ValorReajustado * Number(quantidade);

        setValorTotal(novoValorTotal);
        onTotalChange(novoValorTotal);
    }, [valorUnitario, quantidade, onTotalChange]);

    const FormatarMoeda = (valor) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(valor);
    }

    // Função para receber o valor do select
    const handleSelectChange = (valorSelecionado) => {
        setValorUnitario(valorSelecionado); // Atualiza o valor unitário com o valor selecionado
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 border-b border-solid pb-6 border-slate-500">
            <SelectDefault onSelectChange={handleSelectChange} />
            <InputDefault 
                text={"Valor unitário"} 
                type="number" 
                value={valorUnitario} 
                onChange={(e) => setValorUnitario(e.target.value)} 
                readOnly
            />
            <InputDefault 
                text={"Quantidade"} 
                type="number" 
                value={quantidade} 
                onChange={(e) => setQuantidade(e.target.value)} 
            />
            <InputDefault 
                text={"Valor total"} 
                value={FormatarMoeda(valorTotal)} 
                readOnly 
            />
        </div>
    );
}
