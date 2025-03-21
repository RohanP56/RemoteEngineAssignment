import React from "react";
import "./Imagecomp.css";
//import img from "../../public/image"
function Imagecomp() {
  return (
    <div className="gallery-section">
      {/* First row */}
      <div className="gallery-row">
        <img
          src="/image/1.png"
          className="rounded"
          alt="Scenic landscape 1"
        />
        <img
          src="/image/2.png"
          className="rounded"
          alt="Scenic landscape 2"
        />
        <img
          src="/image/3.png"
          className="rounded"
          alt="Scenic landscape 3"
        />
        <img
          src="/image/4.png"
          className="rounded"
          alt="Scenic landscape 4"
        />
      </div>

      {/* Second row */}
      <div className="gallery-row">
        <img
          src="/image/5.png"
          className="rounded"
          alt="Scenic landscape 5"
        />
        <img
          src="/image/6.png"
          className="rounded"
          alt="Scenic landscape 6"
        />
        <img
          src="/image/7.png"
          className="rounded"
          alt="Scenic landscape 7"
        />
        <img
          src="/image/8.png"
          className="rounded"
          alt="Scenic landscape 8"
        />
      </div>
    </div>
  );
}

export default Imagecomp;
