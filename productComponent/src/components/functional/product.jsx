import { useState } from "react";
const Product = ({productName}) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      <button
        onClick={handelIncreamente}
        className="m-2 btn btn-sm btn-success"
      >
        +
      </button>
      <button
        onClick={handelDecreamente}
        className="m-2 btn btn-sm btn-warning"
      >
        -
      </button>
      <button onClick={handelDelete} className="m-2 btn btn-sm btn-danger ">
        delete
      </button>
    </div>
  );
  function handelIncreamente() {
    setCount(count + 1);
  }
  function handelDecreamente() {
    setCount(count - 1);
  }
  function handelDelete() {
    console.log("delete");
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
