import { Component } from "react";
export default class Product extends Component {
  state = {
    count: this.props.count,
  };
  render() {
  const {productName} = this.props
    return (
  <>
      <div>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={this.handelIncreamente}
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
          onClick={this.handelDelete}
          className="m-2 btn btn-sm btn-danger "
        >
          delete
        </button>
      </div>
    {this.props.children}
      </>
    );
  }
  handelIncreamente = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  handelDecreamente = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };
  handelDelete = () => {
    console.log("delete");
  };
  format() {
    if (this.state.count == 0) {
      return "zero";
    } else {
      return this.state.count;
    }
  }
}
