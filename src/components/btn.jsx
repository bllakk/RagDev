export default function BtnDefault({text, onClick }){
    return(
        <button onClick={onClick} className="text-neutral-200 tracking-wider font-impact">{text}</button>
    );
}