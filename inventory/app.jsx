import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList";
import InventoryForm from "./components/InventoryForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/add-item" element={<InventoryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
