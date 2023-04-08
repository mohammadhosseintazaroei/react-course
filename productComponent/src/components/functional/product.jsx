const Product = ({ productName, count,onDelete,onIncrement,onDecrement, id }) => {

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
    onIncrement(id)
  }
  function handelDecreamente() {
    onDecrement(id)
  }
  function handelDelete() {

    onDelete(id);
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
