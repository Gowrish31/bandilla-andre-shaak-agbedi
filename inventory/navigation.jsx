import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Inventory</Link>
      <Link to="/add-item">Add Item</Link>
    </nav>
  );
};

export default Navigation;
