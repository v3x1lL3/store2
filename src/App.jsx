import { useState } from "react";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const products = [
  // Sporting Goods
  { id: 1, name: "Tennis", price: 99.9, type: 1, stock: 100 },
  { id: 2, name: "Badminton", price: 59.9, type: 1, stock: 16 },
  { id: 3, name: "Football", price: -100, type: 1, stock: 0 },

  // Electronics
  { id: 4, name: "Smartphone", price: 99.9, type: 2, stock: 1 },
  { id: 5, name: "Laptop", price: 59.9, type: 2, stock: 10 },
  { id: 6, name: "Headphones", price: 100, type: 2, stock: 0 },
];

const headers = ["Sporting Goods", "Electronics"];

function App() {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);
  const FilterProducts = products.filter(
    (products) =>
      products.name.toLowerCase().includes(query.toLowerCase()) &&
      (!stockChecked || product.stock > 0)
  );

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
      />

      <ProductTable headers={headers} products={FilterProducts} />
    </FilterProductTable>
  );
}

export default App;
