const InventoryForm = () => {
    return (
      <div>
        <h2>Add Item</h2>
        <form>
          <input type="text" placeholder="Item Name" />
          <input type="number" placeholder="Quantity" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  };
  
  export default InventoryForm;
  