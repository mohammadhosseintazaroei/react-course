import {useContext} from "react";
import ProductContext from "../../context/products";
export default function Navbar() { 
   const productContext = useContext(ProductContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Navbar {calculateSum()}
        </a>
      </div>
    </nav>
  );
  function calculateSum() {
      let sum = 0;
      productContext.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  }
}
