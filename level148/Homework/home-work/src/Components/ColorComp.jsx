import { useState } from "react";

function ColorComp(){
    const [color,setColor] = useState("Blue");
    return(
        <>
    <input onChange={(e)=>{
        setColor(e.target.value);
    }} type="text" value={color} /> 
    <p>Favourite color: {color}</p>       
        </>
    );
}
export default ColorComp;