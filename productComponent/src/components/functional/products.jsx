import { useState } from "react";
import Product from "./product";

const Products = () => {
  const [products, setProduct] = useState([
    { id: 1, count: 1, productName: "laptop" },
    { id: 2, count: 3, productName: "phone" },
    { id: 3, count: 2, productName: "airpod" },
    { id: 4, count: 7, productName: "toy" },
  ]);
  return (
    <>
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          count={product.count}
        >
          <p>Hello its children props</p>
        </Product>
      ))}
    </>
  );
};

export default Products;
