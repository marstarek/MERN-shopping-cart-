import React from "react";
import "../../css/Filter/Filter.css";
import Bounce from "react-reveal/Bounce";

const Filter = (props) => {
  return (
    <Bounce right>
      <div className="filter-wrapper">
        <h2 className="filter-tittle">filter</h2>
        <div className="num-of-product">
          {" "}
          number of products{props.productsNum}
        </div>
        <div className="filter-by-size">
          <span>filter</span>
          <select
            value={props.size}
            className="filter-select"
            onChange={props.handleFilterBySize}
          >
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
          <select
            value={props.order}
            onChange={props.handleFilterByOrder}
            className="filter-select"
            name=""
            id=""
          >
            <option value="latest">latest</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
      </div>{" "}
    </Bounce>
  );
};

export default Filter;
