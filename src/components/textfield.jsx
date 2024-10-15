import React, { useState, useEffect } from "react";
import InputDefault from "./inputsDefault";
import SelectDefault from "./select";

export default function Textfield({ onTotalChange }) {
    const [nomeItem, setNomeItem] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const Porcentagem = (Number(valorUnitario) * 24) / 100;
        const ValorReajustado = Number(valorUnitario) + Porcentagem;
        const novoValorTotal = ValorReajustado * Number(quantidade);

        setValorTotal(novoValorTotal);
        if (onTotalChange) {
            onTotalChange(novoValorTotal);  // Atualiza o valor total
        }
    }, [valorUnitario, quantidade]); // Remove `onTotalChange` da dependência

    const FormatarMoeda = (valor) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(valor);
    };

    const handleSelectChange = (valorSelecionado) => {
        setValorUnitario(Number(valorSelecionado));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 border-b border-solid pb-6 border-slate-500">
            <SelectDefault onSelectChange={handleSelectChange} />
            <InputDefault 
                text={"Valor unitário"} 
                type="number" 
                value={valorUnitario} 
                onChange={(e) => setValorUnitario(Number(e.target.value))} 
                readOnly
            />
            <InputDefault 
                text={"Quantidade"} 
                type="number" 
                value={quantidade} 
                onChange={(e) => setQuantidade(Number(e.target.value))} 
            />
            <InputDefault 
                text={"Valor total"} 
                value={FormatarMoeda(valorTotal)} 
                readOnly 
            />
        </div>
    );
}
