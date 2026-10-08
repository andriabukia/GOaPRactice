import { useEffect } from "react";
import { useState } from "react";
function Timer(){
    const [second,setSecond] = useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setSecond((prevCount)=> prevCount+1);
        },1000);
        return()=>{
            clearInterval(interval);
        }
    },[second])
    return(
        <>
        <h1>{second}</h1>
        </>
    );
}
export default Timer;