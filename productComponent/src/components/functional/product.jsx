import { useContext } from "react";
import ProductContext from "../../context/products";
const Product = ({ productName, count, id }) => {
  const productContext = useContext(ProductContext);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      <button
        onClick={handelIncrement}
        className="m-2 btn btn-sm btn-success"
      >
        +
      </button>
      <button
        onClick={handelDecrement}
        className="m-2 btn btn-sm btn-warning"
      >
        -
      </button>
      <button onClick={handelDelete} className="m-2 btn btn-sm btn-danger ">
        delete
      </button>
    </div>
  );
  function handelIncrement () {
    productContext.onIncrement(id)
  }
  function handelDecrement() {
    productContext.onDecrement(id)
  }
  function handelDelete() {

    productContext.onDelete(id);
  }
  function format() {
    if (count == 0) {
      return "zero";
    } else {
      return count;
    }
  }
};

export default Product;
