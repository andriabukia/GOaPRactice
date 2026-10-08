import Product from "./Product";
function Basket(){
    return(
        <div>
            <Product name="pizza" price="2.99" category="savory"/>
            <Product name="lava cake" price="10.99" category="sweet"/>
            <Product name="bubblegums" price="1" category="sweet"/>
        </div>
    );
}
export default Basket;