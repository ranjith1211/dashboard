import { HalfPieChart } from "half-pie-chart";
import React, { Component } from "react";

class Half extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: [
        {
          value: 20,
          displayValue: "20 $",
          text: "Collected",
          // color: "#4cb38e",
          color: "#4cb38e",
        },
      ],
      left: [
        {
          value: 10,
          displayValue: "10 $",
          text: "Pending",
          color: "#eee36b",
        },
      ],
    };
  }
  render() {
    return <HalfPieChart right={this.state.right} left={this.state.left} />;
  }
}
export default Half;
