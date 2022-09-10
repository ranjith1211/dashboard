import React, { Component } from "react";
import Chart from "react-apexcharts";

class Negative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, -45, 50, 49, -60, 70, -61,100,65,-38,75,-56]
        }
      ]
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
              width="700"
              height="115%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Negative;