import React, { Component } from "react";
import "./style.css";
class Counter extends Component {
  render() {
    return (
      <>
        <div className="counterWrapper">
          <span className="counterValue">{this.props.item.count}</span>
          <button
            className="counterDec"
            onClick={() => this.props.decrementHandler(this.props.item.id)}
          >
            -
          </button>
          <button
            className="counterInc"
            onClick={() => this.props.incrementHandler(this.props.item.id)}
          >
            +
          </button>
        </div>
      </>
    );
  }
}
export default Counter;
