import React, { useState, useEffect } from "react";
import Products from "./products";
import Navbar from "./navbar";
import ProductContext from "../../context/products";
export default function App() {
  const [products, setProducts] = useState([
    { id: 1, count: 1, productName: "laptop" },
    { id: 2, count: 3, productName: "phone" },
    { id: 3, count: 2, productName: "airpod" },
    { id: 4, count: 7, productName: "toy" },
  ]);

  useEffect(() => {
    console.log("App");
  }, []);
  useEffect(() => {
    console.log("App2");
  });
  return (
    <>
      <ProductContext.Provider
        value={{
          products: products,
          onDelete: handleDelete,
          onIncrement: handleIncrement,
          onDecrement: handleDecrement,
          onReset: handleReset,
        }}
      >
        <Navbar />
        <Products />
      </ProductContext.Provider>
    </>
  );
  function handleDelete(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }
  function handleIncrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }
  function handleDecrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
  function handleReset() {
    const newProducts = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts(newProducts);
  }
}
