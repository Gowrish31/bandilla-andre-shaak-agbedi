const InventoryItem = ({ item }) => {
    return (
      <div>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
      </div>
    );
  };
  
  export default InventoryItem;
  