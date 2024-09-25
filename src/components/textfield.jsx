import React, { useState } from "react";
import InputDefaut from "./inputs";

export default function Textfield() {
    const [nomeItem, setNomeItem] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [quantidade, setQuantidade] = useState("");
    
    const Porcentagem = (valorUnitario * 24) / 100;
    const ValorReajustado = valorUnitario + Porcentagem;
    const valorTotal = ValorReajustado * quantidade;
    
    const FormatarMoeda = (valor) => {
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(valor);
    }
    const ValorTotalFormatado = FormatarMoeda(valorTotal);

    return (
        <div className="flex gap-10 mb-5">
            <InputDefaut 
                text={"Nome do item"} 
                value={nomeItem} 
                onChange={(e) => setNomeItem(e.target.value)} 
            />
            <InputDefaut 
                text={"Valor unitário"} 
                type="number" 
                value={valorUnitario} 
                onChange={(e) => setValorUnitario(Number(e.target.value))} 
            />
            <InputDefaut 
                text={"Quantidade"} 
                type="number" 
                value={quantidade} 
                onChange={(e) => setQuantidade(Number(e.target.value))} 
            />
            <InputDefaut 
                text={"Valor total"} 
                value={ValorTotalFormatado} 
                readOnly 
            />
        </div>
    );
}
