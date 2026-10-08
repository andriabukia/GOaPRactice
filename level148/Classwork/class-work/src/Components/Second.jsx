import { useState } from "react";

function Second(){
    const [text,setText] = useState("");
    return(
        <>
        <input onChange={(e)=>{
            setText(e.target.value);
        }} type="text" name="" id="" />
        <button onClick={setText("React is awesome (fr)")}>click me</button>
        </>
    );
}
export default Second;