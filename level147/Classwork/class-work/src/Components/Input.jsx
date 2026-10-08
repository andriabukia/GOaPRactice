import { useState } from "react";

function Input(){
    const [text,setText] = useState("");
    return(
        <>
        <input onChange={(e)=>{
            setText(e.target.value)
        }} type="text" />
        </>
    );
}
export default Input;