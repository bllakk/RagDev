import React, { useState, useCallback } from "react";
import Textfield from "./textfield";
import BtnDefault from "./btn-default";

export default function Calculadora() {
    const [textfields, setTextfields] = useState([]);
    const [total, setTotal] = useState(0);
    const maxFields = 7;

    const handleAddTextfield = () => {
        if (textfields.length < maxFields) {
            setTextfields([...textfields, { id: textfields.length, valorTotal: 0 }]);
        } else {
            alert(`Você só pode adicionar até ${maxFields} campos.`);
        }
    };

    // Utilize useCallback para evitar recriação da função a cada renderização
    const handleTotalChange = useCallback((index, novoValorTotal) => {
        const updatedTextfields = [...textfields];
        updatedTextfields[index].valorTotal = novoValorTotal; // Atualiza o valor total deste Textfield

        // Recalcula o total com base nos novos valores
        const novoTotal = updatedTextfields.reduce((acc, field) => acc + field.valorTotal, 0);
        setTextfields(updatedTextfields); // Atualiza o estado dos textfields
        setTotal(novoTotal); // Atualiza o total
    }, [textfields]);

    const formatarValorZeny = (valor) => {
        return valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).replace('R$', 'Z$');
    };

    const converterZenyEmReal = (valor) => {
        const valorConvertido = valor * 0.55 / 1000000;
        return valorConvertido.toFixed(2).replace('.', ',');
    };
    
    return (
        <div className="flex flex-col items-center my-8 ">
            {textfields.map((field, index) => (
                <Textfield 
                    key={index} 
                    onTotalChange={(valorTotal) => handleTotalChange(index, valorTotal)} 
                />
            ))}
            <h1 className="text-slate-300 tracking-wider font-tungstenMedium text-2xl">TOTAL: Z$ {formatarValorZeny(total)}</h1>
            <h2 className="text-slate-300 tracking-wider font-tungstenMedium text-2xl mb-5">TOTAL: R$ {converterZenyEmReal(total.toFixed(2))}</h2>

            <BtnDefault text={"ADICIONAR ITEM"} functionality={handleAddTextfield}/>
        </div>
    );
}
