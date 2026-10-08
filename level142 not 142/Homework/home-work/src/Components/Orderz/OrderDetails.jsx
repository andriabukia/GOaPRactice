function OrderDetails(props){
    return(
        <>
        <h1>{props.orderId}</h1>
        <p>{props.totalAmount}</p>
        </>
    );
}
export default OrderDetails;