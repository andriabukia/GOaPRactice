function ProductCard({ item, setCart, cart }) {
  const handleAddToCart = () => {
    setCart([...cart, item]);
    alert("დაემატა!");
  };

  return (
    <button onClick={handleAddToCart}>
      კალათაში დამატება
    </button>
  );
}