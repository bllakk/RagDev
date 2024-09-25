import React from "react";

export default function SelectDefault({ onSelectChange }) {
    const handleSelectChange = (e) => {
        const valorSelecionado = e.target.value;
        onSelectChange(valorSelecionado); // Envia o valor selecionado para o componente pai
    };

    return (
        <select 
            className="bg-gray-700 text-slate-300 h-10 w-60 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-default pl-3 font-impact tracking-wider" 
            onChange={handleSelectChange}
            defaultValue="" // Evento onChange para capturar o valor
        >
            <option value="" disabled>SELECIONE UM ITEM</option>
            <option value="530">Máscara Branca</option>
            <option value="1008">Runa Branca</option>
            <option value="15000">Anel</option>
            <option value="15000">Anel de ouro</option>
            <option value="10000">Anel de prata</option>
            <option value="284">Argola</option>
            <option value="800">Erva branca</option>
        </select>
    );
}
