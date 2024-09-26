import InputDefault from "./inputs";
import BtnCustom from "./btn-custom";
export default function Financas(){
    return(
        <div>
            <div className="flex justify-center gap-6">
                <div>
                    <h1 className="font-impact tracking-widest text-base  text-slate-300">LUCRO DO MES / ZENY</h1>
                    <h2 className="font-impact tracking-widest text-xl text-slate-300">Z$</h2>
                </div>
                <div>
                    <h1 className="font-impact tracking-widest text-base  text-slate-300">LUCRO DO MES / REAL</h1>
                    <h2 className="font-impact tracking-widest text-xl text-slate-300">R$</h2>
                </div>
            </div>
            <div className="flex gap-5 justify-center mt-5">
            <div>
                <h1>ADICIONAR GANHOS DIARIO</h1>
                <div className="flex justify-center items-center text-center gap-5">
                    <InputDefault text={"Z$"}/>
                    <BtnCustom text={"ADICIONAR VALOR"}/>
                </div>
            </div>
            <div>
                <h1>GASTOS DESSE MES</h1>
                <div className="flex justify-center items-center text-center gap-5">
                    <InputDefault text={"INVESTIMENTO"}/>
                    <InputDefault text={"Z$"}/>
                    <BtnCustom text={"ADICIONAR VALOR"}/>
                </div>
            </div>
        </div>
    </div>
    );
} 