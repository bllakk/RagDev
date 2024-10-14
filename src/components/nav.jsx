import Btn from "./btn";

export default function Nav({ onButtonClick }) {
    return (
        <header className="flex justify-between items-center px-12 py-2 w-screen border-solid border-slate-500 border-b">
            <div className="h-min flex gap-10">
                <Btn text="CALCULADORA" 
                    onClick={() => onButtonClick('calculadora')} />
                <Btn text="FINANÇAS" 
                    onClick={() => onButtonClick('financas')} />
            </div>
        </header>
    );
}