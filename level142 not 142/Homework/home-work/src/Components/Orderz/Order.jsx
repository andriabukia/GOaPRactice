import OrderDetails from "./OrderDetails";
function Order(props){
    return(
        <>
        <OrderDetails orderId={props.orderId} totalAmount={props.totalAmount} />
        </>
    );
}
export default Order;