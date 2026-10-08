import { useState } from "react";

function MessageComp(){
    const [message,setMessage] = useState("Hello");
    return(
        <>
    <input onChange={(e)=>{
        setMessage(e.target.value);
    }} type="text" value={message} />
    <button onClick={()=>{setMessage("I Love React")}}>React</button>
    <button onClick={()=>{setMessage("I love JavaScript")}}>JavaScript</button>    
        </>
    );
}
export default MessageComp;