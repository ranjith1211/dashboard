import React from "react";
import Bar from "./Bar";
import Column from "./Column";
import Column1 from "./Column1";
import Donut from "./Pie";
import Half from "./Half";
import Negative from "./Negative";
import "./Main.css";

const Left = () => {
  return (
    <>
      <div className="leftbarA">
        <div className="leftbar3">
          <Bar />
        </div>
        <div className="leftbar1">
          <Column1 />
        </div>

        <div className="leftbar4">
          <Donut />
        </div>
        <div className="leftbar5">
          <Half />
        </div>
        <div className="leftbar5">
          <Half />
        </div>

        <div className="leftbar2">
          <Column />
        </div>

        <div className="leftbar6">
          <Negative />
        </div>
        <div className="leftbar7">
          <Donut />
        </div>
      </div>
    </>
  );
};

export default Left;
