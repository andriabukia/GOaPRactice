function CartItem(props){
    return(
        <div>
            <h1>name: {props.name}</h1>
            <p>price: {props.price}</p>
            <p>quantity: {props.quantity}</p>
        </div>
    );
}
export default CartItem;