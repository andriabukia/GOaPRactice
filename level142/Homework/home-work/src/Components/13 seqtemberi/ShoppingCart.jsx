import { useState } from "react";
function ShoppingCart(){
    const[cart,setCart] = useState({product:"Laptop",price:1000,quantity:1})
    const increaseQuantity = () =>{
        setCart({...cart,quantity:cart.quantity + 1});
    }
    const decreaseQuantity = () =>{
        setCart({...cart,quantity:cart.quantity - 1});
    }
    const changeName = () =>{
        setCart({...cart,product:"PC gaming pro jjk edition :D"})
    }
    return(
        <>
        <ul>
            <li>{cart.product}</li>
            <li>{cart.price}</li>
            <li>{cart.quantity}</li>
        </ul>        
        <ol>
            <li><button onClick={() => increaseQuantity()}>Increase Quantity</button></li>
            <li><button onClick={() => decreaseQuantity()}>Decrease Quantity</button></li>
            <li><button onClick={() => changeName()}>Change Product</button></li>
        </ol>
        </>
    );
}
export default ShoppingCart;