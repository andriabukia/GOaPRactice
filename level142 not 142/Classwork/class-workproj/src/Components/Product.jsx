import { useState } from "react";
function Product(){
    const[product,setProduct] = useState(
        {
            name:"Laptop",
            price:1500,
            inStock:true
        }
    );
    const changePrice = () =>{
        setProduct({
             name:"Laptop",
            price:1800,
            inStock:true
        })
    }
    return(
        <div>
            <button onClick={changePrice}>changePrice</button>
            <ul>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.inStock.toString()}</li>
            </ul>
        </div>
    );
}
export default Product;