export default function BtnDefault({ type, text, functionality }) {
    return (
        <button
            className="bg-purple-btn text-slate-200 py-2 px-10 rounded w-auto font-tungstenMedium tracking-wider text-2xl"
            type={type}
            onClick={functionality}
        >
            {text}
        </button>
    );
}
