import { Component } from "react";

export default class Product extends Component {
  count = 0;
  render() {
    return (
      <>
        <span className="m-2 text-info">product name</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <span className="m-2 badge bg-primary">
          {this.count === 0 ? "zero" : this.count}
        </span>
        <span className="m-2 badge bg-primary">
          {this.count !== 0 && this.count}
        </span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning">-</button>
        <button className="m-2 btn btn-sm btn-danger ">delete</button>
      </>
    );
  }

  format() {
    if (this.count == 0) {
      return "zero";
    } else {
      return this.count;
    }
  }
}
