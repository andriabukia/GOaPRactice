import { useState,useEffect } from "react";
function Timer(){
    const[time,setTime] = useState(0);
    const [timerActive,setTimerActive] = useState(false);
    
   useEffect(()=>{
    let interval = null;
    if(timerActive){
        interval = setInterval(()=>{
            setTime((prevTime) => prevTime + 1)
        },1000)
    }

    return() => {
        if(interval){
            clearInterval(interval);
        }
    };
   },[timerActive])

    return(
        <>
        <button onClick={() => setTimerActive(true)}>start</button>
        <h1>{time}</h1>
        <button onClick={() => setTimerActive(false)}>stop</button>
        </>
    );
}
export default Timer;