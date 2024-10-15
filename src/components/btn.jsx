export default function Btn({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-transparent text-slate-200 rounded font-tungstenMedium tracking-wider text-2xl">
            {text}
        </button>
    );
}
