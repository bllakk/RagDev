import BtnDefault from "./btn";

export default function Nav({ onButtonClick }) {
    return (
      <header className="flex justify-between items-center px-12 py-2 w-screen border-solid border-slate-500 border-b">
        <div className="h-min flex gap-10">
          <BtnDefault text="CALCULADORA" onClick={() => onButtonClick('calculadora')} />
          <BtnDefault text="FINANÇAS" onClick={() => onButtonClick('financas')} />
          <BtnDefault text="PERSONAGEM" onClick={() => onButtonClick('personagem')} />
        </div>
      </header>
    );
  }
  
