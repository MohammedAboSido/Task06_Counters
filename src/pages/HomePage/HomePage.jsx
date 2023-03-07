import React, { Component } from "react";
import Counter from "../../components/Counter/Counter";
import "./style.css";
const counters = [
  { id: 1, count: 0, step: 2 },
  { id: 2, count: 0, step: 4 },
  { id: 3, count: 0, step: 6 },
  { id: 4, count: 0, step: 8 },
];
class HomePage extends Component {
  state = {
    counters,
    total: 0,
  };
  incrementHandler = (id) => {
    this.setState((prev) => ({
      ...prev,
      counters: prev.counters.map((item) =>
        item.id === id ? { ...item, count: item.count + item.step } : item
      ),
    }));
    this.totalHandler();
  };
  decrementHandler = (id) => {
    this.setState((prev) => ({
      ...prev,
      counters: prev.counters.map((item) =>
        item.id === id ? { ...item, count: item.count>=item.step ? item.count - item.step:item.count } : item
      ),
    }));
    this.totalHandler();
  };
  totalHandler = () => {
    this.setState((prev) => ({
      ...prev,
      total: prev.counters.reduce((acc, curr) => (acc += curr.count), 0),
    }));
  };
  render() {
    return (
      <>
        <section className="counterSection">
          <div className="counters">
            {this.state.counters.map((item) => (
              <Counter
                key={item.id}
                item={item}
                incrementHandler={this.incrementHandler}
                decrementHandler={this.decrementHandler}
              />
            ))}
          </div>
          <span className="totalValue">Total amount: <span className="value">{this.state.total}</span></span>
        </section>
      </>
    );
  }
}
export default HomePage;
