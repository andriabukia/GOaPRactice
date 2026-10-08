import { useState } from "react";

function ReactInput(){
    const [first,setFirst] = useState("React");
    return(
        <>
        <input type="text" value={first} />
        <button onClick={()=>{
            setFirst("Javascript")
        }}>Change</button>
        </>
    );
}
export default ReactInput;