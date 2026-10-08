import { useState } from "react";

function NameInput(){
    const [name,setName] = useState("Giorgi");
    return(
        <>
        <input onChange={(e)=>{
            setName(e.target.value)
        }} type="text" value={name} />
        </>
    );
}
export default NameInput;