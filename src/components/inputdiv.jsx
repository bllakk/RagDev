import Textfield from "./textfield.JSX";
export default function InputDiv(){
    return(
        <div className=" flex flex-col items-center mt-20">
            <Textfield/>
            <Textfield/>
            <Textfield/>
            <Textfield/>
        </div>
    );
}