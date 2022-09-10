import React, { Component } from "react";
import Chart from "react-apexcharts";

class Pie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41],
      labels: ["A", "B", "C"],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="400"
          height={"100%"}
        />
      </div>
    );
  }
}

export default Pie;
