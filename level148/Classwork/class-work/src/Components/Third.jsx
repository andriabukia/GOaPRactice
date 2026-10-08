import { useRef, useState } from "react";

function Third(){
    const [inp,setInp] = useState("")
    const secondInp = useRef(null);
    const [text,setText] = useState("");
    return(
        <>
        <input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}} />
        <input type="text"  ref={secondInp}/>
        <button onClick={()=>{
            setText(`${inp} ${secondInp.current.value}`)
        }}>click me</button>
        <h1>{text}</h1>
        </>
        
    );
}
export default Third;