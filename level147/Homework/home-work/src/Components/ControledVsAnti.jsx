import { useRef, useState } from "react";

function ControledVsAnti(){
    const [text,setText] = useState("");
    const secondInputRef = useRef(null)
    return(
        <>
        <input onChange={(event)=>{
            setText(event.target.value);
        }} type="text" />
        <input type="text" ref={secondInputRef} />
        <button onClick={()=>{
            console.log(`first input: ${text} |  second input: ${secondInputRef.current.value}`)
        }}> click me to affect all of this to console </button>
        </>
    );
}
export default ControledVsAnti;