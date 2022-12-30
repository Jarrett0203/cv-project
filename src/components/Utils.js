import React, { forwardRef } from "react";
import ReactToPrint from "react-to-print";
import "./../styles/Utils.css";

const Utils = forwardRef(({ onLoadExample, onReset }, ref) => {
  return (
    <div className="utils">
      <ReactToPrint
        trigger={() => <button className="pdf">Generate PDF</button>}
        content={() => ref.current}
      />
      <button className="example" onClick={onLoadExample}>
        Load example
      </button>
      <button className="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
});

export default Utils;
