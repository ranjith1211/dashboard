import React, { Component } from "react";
import Chart from "react-apexcharts";

class Column1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021],
        },
      },
      series: [
        {
          name: "Austria",
          data: [30, 40, 45, 50],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="380"
              height="115%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Column1;
