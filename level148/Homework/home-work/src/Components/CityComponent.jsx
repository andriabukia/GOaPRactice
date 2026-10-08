import { useState } from "react";

function CityComponent(){
    const [city,setCity] = useState("Tbilisi");
    return(
        <>
        <input onChange={(event)=>{
            setCity(event.target.value);
        }} type="text" value={city} />
        <p>You live in {city}</p>
        </>
    );
}
export default CityComponent;