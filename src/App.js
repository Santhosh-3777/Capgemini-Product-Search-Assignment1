import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

const products = [
  { id: 1, name: "Laptop", price: "$1000", category: "Electronics" },
  { id: 2, name: "Smartphone", price: "$800", category: "Electronics" },
  { id: 3, name: "Headphones", price: "$150", category: "Accessories" },
  { id: 4, name: "Keyboard", price: "$50", category: "Accessories" },
  { id: 5, name: "Mouse", price: "$30", category: "Accessories" },
  { id: 6, name: "Monitor", price: "$300", category: "Electronics" },
  { id: 7, name: "Tablet", price: "$500", category: "Electronics" },
  { id: 8, name: "Smartwatch", price: "$200", category: "Wearables" },
  { id: 9, name: "Speakers", price: "$120", category: "Accessories" },
  { id: 10, name: "Gaming Console", price: "$400", category: "Gaming" },
];

function App() {
  const [search, setSearch] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">Product Search</h2>
      
      {/* Search Input */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>

      {/* Product Table */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
