import { useState } from "react";
function Counter(){
    const [count,state] = useState(0);
    const add = () =>{
        state(count+1)
    }
    const remove = () =>{
        state(count-1)
    }
    return(
        <div>
            <button onClick={add}>+</button>
            <p>{count}</p>
            <button onClick={remove}>-</button>
        </div>
    );
}
export default Counter;