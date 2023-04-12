import { useContext } from "react";
import Product from "./product";
import ProductContext from "../../\context/products";

const Products = () => {
  const productContext = useContext(ProductContext);
  return (
    <>
      <button onClick={productContext.onReset} className="btn btn-primary">
        Reset
      </button>
      {productContext.products.map((product, index) => (
        <Product
          key={index}
          id={product.id}
    
          productName={product.productName}
          count={product.count}
        />
      ))}
    </>
  );
};

export default Products;
