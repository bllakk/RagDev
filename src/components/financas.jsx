import InputDefault from './inputs';
import BtnCustom from './btn-custom';
export default function Financas() {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-impact tracking-widest text-base text-slate-300">
                        LUCRO DO MÊS / ZENY
                    </h1>
                    <h2 className="font-impact tracking-widest text-xl text-slate-300">
                        Z$
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
                    <h1 className="font-semibold text-slate-300">
                        ADICIONAR GANHOS DIÁRIO
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault text={'Z$'} />
                        <BtnCustom text={'ADICIONAR VALOR'} />
                    </div>
                </div>

                <div className="w-full sm:w-auto text-center">
                    <h1 className="font-semibold text-slate-300">GASTOS DESSE MÊS</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <InputDefault text={'INVESTIMENTO'} />
                        <InputDefault text={'Z$'} />
                        <BtnCustom text={'ADICIONAR VALOR'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
