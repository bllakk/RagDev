export default function BtnCustom({text, functionality}){
    return(
        <button
                onClick={functionality}
                className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded border border-solid border-slate-200 text-slate-200 shadow-default transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-200 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-slate-800"
            >
                <span class="relative z-10 font-impact tracking-wider">{text}</span>
            </button>
    );
}