import CartItem from "./CartItem";
function Cart(){
    return(
        <div>
            <CartItem name="PeteZa" price="12.99$" quantity="10"/>
            <CartItem name="PS5" price="500$" quantity="0"/>
            <CartItem name="Banene" price="2.95$" quantity="26"/>
        </div>
    );
}
export default Cart;