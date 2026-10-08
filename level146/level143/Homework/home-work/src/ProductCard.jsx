import { useState } from "react";
function ProductCard(){
    const[cart,setCart] = useState({product:"pizza",price:16.99})
    const handleAddToCart = ()=>{
        setCart([...cart,"dumpling"])
        alert("დაემატა!")
    }
    return(
        <>
        <button onClick={handleAddToCart}>add item</button>
        <h1>{cart}</h1>
        </>
    );
}
export default ProductCard;