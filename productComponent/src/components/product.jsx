import { Component } from "react";
export default class Product extends Component {

  render() {
  const {productName} = this.props
    return (
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">{this.format()}</span> 
        <button
          onClick={this.handelIncrement}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={this.handelDecrement}
          className="m-2 btn btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={this.handelDelete}
          className="m-2 btn btn-sm btn-danger "
        >
          delete
        </button>
      </div>
    );
  }
  handelIncrement = () => {
this.props.onIncrement(this.props.id)
  };
  handelDecrement = () => {
    this.props.onDecrement(this.props.id)

  };
  handelDelete = () => {
  this.props.onDelete(this.props.id)
  };
  format() {
    if (this.props.count == 0) {
      return "zero";
    } else {
      return this.props.count;
    }
  }
}
