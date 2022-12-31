import React, { forwardRef } from "react";
import ReactToPrint from "react-to-print";
import "./../../styles/Form/Utils.css";

const Utils = forwardRef(({ onLoadExample, onReset }, ref) => {
  return (
    <div className="utils">
      <ReactToPrint
        trigger={() => <button className="pdf">Print Resume</button>}
        content={() => ref.current}
      />
      <button className="example" onClick={onLoadExample}>
        Load Example
      </button>
      <button className="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
});

export default Utils;
