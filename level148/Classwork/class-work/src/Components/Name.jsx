import { useState } from "react";

function Name(){
    const [name,setName] = useState("Guest");
    return(
        <>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" value={name} />
        <h1>Hello {name}</h1>
        </>
    );
}
export default Name;