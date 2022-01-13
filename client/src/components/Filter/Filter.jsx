import React from "react";
import "../../css/Filter/Filter.css";
const Filter = () => {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-tittle">filter</h2>
      <div className="num-of-product">num of pro</div>
      <div className="filter-by-size">
        <span>filter</span>
        <select className="filter-select" name="" id="">
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      {/*  */}
      <div className="filter-by-size">
        <span>order</span>
        <select className="filter-select" name="" id="">
          <option value="latest">latest</option>
          <option value="lower">lower</option>
          <option value="heighter">heighter</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
