import BtnDefault from "./btn";

export default function Nav() {
    return (
        <header className="flex justify-between items-center px-12 py-2 w-screen border-solid border-gray-950 border-b">
            <img className="w-14" src="/poring.png" alt="" />
            <div className="h-min flex gap-10">
                <BtnDefault  text="CALCULADORA"/>
                <BtnDefault text="PERSONAGEM"/>
            </div>
        </header>
    );
}
