import React, { useState } from "react";
import Textfield from "./textfield";
import BtnCustom from "./btn-custom";
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

    const handleTotalChange = (index, novoValorTotal) => {
        const updatedTextfields = [...textfields];
        updatedTextfields[index].valorTotal = novoValorTotal; // Atualiza o valor total deste Textfield

        // Recalcula o total com base nos novos valores
        const novoTotal = updatedTextfields.reduce((acc, field) => acc + field.valorTotal, 0);
        setTextfields(updatedTextfields); // Atualiza o estado dos textfields
        setTotal(novoTotal); // Atualiza o total
    };

    const formatarValorZeny = (valor) => {
        // Transforma o valor em uma string formatada
        return valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).replace('R$', 'Z$'); // Troca "R$" por "Z$"
    };
    const converterZenyEmReal = (valor) => {
        // Divide o valor por 1.000.000
        const valorConvertido = valor * 0.55 / 1000000; 
        // Formata o valor para 5 casas decimais
        return valorConvertido.toFixed(2).replace('.', ',');
    };
    
    return (
        <div className="flex flex-col items-center mt-8 ">
            {textfields.map((field, index) => (
                <Textfield 
                    key={index} 
                    onTotalChange={(valorTotal) => handleTotalChange(index, valorTotal)} 
                />
            ))}
            <h1 className="text-slate-300 tracking-wider font-impact">TOTAL: Z$ {formatarValorZeny(total)}</h1>
            <h2 className="text-slate-300 tracking-wider font-impact ">TOTAL: R$ {converterZenyEmReal(total.toFixed(2))}</h2>

            <BtnCustom text={"ADICIONAR ITEM"} functionality={handleAddTextfield}/>
        </div>
    );
}
