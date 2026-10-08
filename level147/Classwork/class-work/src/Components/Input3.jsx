import { useState } from "react";

function Input3(){
    const [text,setText] = useState("Hello world");
    return(
        <>
        <input type="text" placeholder={text} />
        </>
    );
}
export default Input3;