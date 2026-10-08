import { useState } from "react";

function NameComp(){
    const [name,setName] = useState("");
    return(
        <>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" value={name}/>
        <button onClick={()=>setName("Giorgi")}>Change name to giorgi</button>
        </>
    );
}
export default NameComp;