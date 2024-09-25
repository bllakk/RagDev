import React, { useState, useEffect } from "react";
import InputDefaut from "./inputs";

export default function Textfield({ onTotalChange }) {
    const [nomeItem, setNomeItem] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const Porcentagem = (valorUnitario * 24) / 100;
        const ValorReajustado = Number(valorUnitario) + Porcentagem; // Certifique-se de que seja um número
        const novoValorTotal = ValorReajustado * Number(quantidade); // Certifique-se de que seja um número

        setValorTotal(novoValorTotal);
        onTotalChange(novoValorTotal); // Passa o novo valor total para o componente pai
    }, [valorUnitario, quantidade, onTotalChange]);

    const FormatarMoeda = (valor) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(valor);
    }

    return (
        <div className="grid grid-cols-4 gap-10 mb-5">
            <InputDefaut 
                text={"Nome do item"} 
                value={nomeItem} 
                onChange={(e) => setNomeItem(e.target.value)} 
            />
            <InputDefaut 
                text={"Valor unitário"} 
                type="number" 
                value={valorUnitario} 
                onChange={(e) => setValorUnitario(e.target.value)} 
            />
            <InputDefaut 
                text={"Quantidade"} 
                type="number" 
                value={quantidade} 
                onChange={(e) => setQuantidade(e.target.value)} 
            />
            <InputDefaut 
                text={"Valor total"} 
                value={FormatarMoeda(valorTotal)} 
                readOnly 
            />
        </div>
    );
}
