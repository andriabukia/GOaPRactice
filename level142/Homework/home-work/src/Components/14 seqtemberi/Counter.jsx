import { useState,useEffect } from "react";
function Counter(){
    const [number,setnumber] = useState(0);

    useEffect(() =>{
        console.log(`Count changed to ${number}`)
    },[{number}])
    const increase = () =>{
        setnumber((prevNum) => prevNum + 1)
    }
    return(
        <>
        <button onClick={increase}>increase</button>
        <h1>{number}</h1>
        </>
    );
}
export default Counter;