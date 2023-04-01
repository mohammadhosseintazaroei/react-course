import { Component } from "react";
export default class Product extends Component {
  count = 0;
  render() {
    return (
      <>
        <span className="m-2 text-info">product name</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={this.handelIncreamente.bind(this)}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handelDecreamente}
          className="m-2 btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={() => this.handelDelete(1)}
          className="m-2 btn btn-sm btn-danger "
        >
          delete
        </button>
      </>
    );
  }
  handelIncreamente() {
    console.log("increamente", this);
  }
  handelDecreamente = () => {
    console.log("decreamente", this);
  };
  handelDelete(itemNumber) {
    console.log("delete", itemNumber);
  }
  format() {
    if (this.count == 0) {
      return "zero";
    } else {
      return this.count;
    }
  }
}
