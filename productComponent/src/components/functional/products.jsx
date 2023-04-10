import { useState } from "react";
import Product from "./product";

const Products = ({
  products,
  onDelete,
  onIncrement,
  onReset,
  onDecrement,
}) => {
  return (
    <>
      <button onClick={onReset} className="btn btn-primary">
        Reset
      </button>
      {products.map((product, index) => (
        <Product
          key={index}
          id={product.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          productName={product.productName}
          count={product.count}
        />
      ))}
    </>
  );
};

export default Products;
