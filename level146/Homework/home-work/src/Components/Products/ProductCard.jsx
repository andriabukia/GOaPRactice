import './Product.css';
import './ProductIMG.css';
import { useState } from 'react';
function ProductCard(){
    const [isInStock, setIsInStock] = useState(true);
    const priceTagStyle = {
        backgroundColor:'#22c55e',
        color:'white',
        padding:'6px 12px',
        borderRadius:'20px'
    }
    const randomQnt = Math.floor(Math.random()*100) + 1;
    return(
        <>
       <div className='center'>
         <div className='productCard'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4aGn1VO584EPbMq-rpavYLrYDRt71DqO9uQioHpGyQ&s=10" alt="pizza" />
        <p>Pizza</p>
        <p>qnt: {isInStock ? randomQnt : 0}</p>
        <p style={priceTagStyle}>20.99$</p>
            <p style={{
            color:'#15803d',
            fontSize:'14px',
            fontStyle:'italic'
        }}>{isInStock ? "მარაგშია" : "არ არის მარაგში"}</p>
        <button onClick={()=>{
            if(isInStock === true){
                setIsInStock(false)
            }else{
                setIsInStock(true)
            }
        }} style={{
            backgroundColor:'antiquewhite',
            color:'brown',
            border:'2px solid brown',
            height:'50px',
            width:'70px',
            fontSize:'15px'
        }}>change stock</button>
        </div>
       </div>
        
        </>
    );
}
export default ProductCard;