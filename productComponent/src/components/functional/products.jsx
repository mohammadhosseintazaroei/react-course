import { useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, count: 1, productName: "laptop" },
    { id: 2, count: 3, productName: "phone" },
    { id: 3, count: 2, productName: "airpod" },
    { id: 4, count: 7, productName: "toy" },
  ]);
  return (
    <>
          <button onClick={handleReset} className="btn btn-primary">
          Reset
        </button>
      {products.map((product, index) => (
        <Product
          key={index}
          id={product.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          productName={product.productName}
          count={product.count}
        />
      ))}
    </>
  );
  function handleIncrement  (productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts( newProducts );
  };
  function handleDecrement  (productId)  {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts( newProducts );

  };
  function handleDelete  (productId){
    const newProducts = products.filter(p => p.id !== productId)
    setProducts( newProducts)
  };
function handleReset  ()  {
    const newProducts = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts( newProducts );
  };
};

export default Products;
