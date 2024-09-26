export default function InputDefault({ text, value, onChange, type = "text", readOnly = false }) {
    return (
        <input
            className="bg-gray-700 text-slate-300 h-10 w-60 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-default pl-3"
            type={type}
            placeholder={text}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
        />
    );
}
