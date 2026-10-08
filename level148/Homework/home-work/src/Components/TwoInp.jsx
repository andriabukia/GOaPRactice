import { useRef, useState } from "react";

function TwoInp(){
    const [city,setCity] = useState("Cairo");
    const [text,setText] = useState("");
    const cityRef = useRef(null);
    return(
        <>
        <input onChange={(e)=>setCity(e.target.value)} type="text" value={city}/>
        <input type="text" ref={cityRef}/>
        <button onClick={()=>{
            setText(`First value: ${city}; Second value: ${cityRef.current.value}`)
        }}>Show Values</button>
        <p>{text}</p>
        </>
    );
}
export default TwoInp;