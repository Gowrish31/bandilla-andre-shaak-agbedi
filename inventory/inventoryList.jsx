import InventoryItem from "./InventoryItem";

const inventory = [
  { name: "Laptop", quantity: 5 },
  { name: "Mouse", quantity: 10 },
];

const InventoryList = () => {
  return (
    <div>
      <h2>Inventory List</h2>
      {inventory.map((item, index) => (
        <InventoryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default InventoryList;
