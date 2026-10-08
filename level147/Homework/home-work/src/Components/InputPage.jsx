import { useState } from "react";

function InputPage(){
    const [text,setText] = useState("");
    return(<>
    <input onChange={(e)=>{
        setText(e.target.value);
    }} type="text" />
    <p>{text}</p>
    </>);
}
export default InputPage;