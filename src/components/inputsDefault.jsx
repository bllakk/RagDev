export default function InputDefault({ type, value, onChange, placeholder, readOnly, isFixedWidth }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            placeholder={placeholder}
            className={`bg-dark-blue-2 h-12 pl-4 text-slate-200 outline-none focus:border focus:border-purple-alert rounded-sm font-poppins 
            ${isFixedWidth ? 'w-64' : 'w-72'} ${type === 'number' ? 'no-spinner' : ''}`}
        />
    );
}
