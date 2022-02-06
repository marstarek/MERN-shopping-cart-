import React from "react";
import "../../css/Filter/Filter.css";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { filteredSize, filteredorder } from "../../store/actions/products";
const Filter = (props) => {
  return (
    <Bounce right>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2 className="filter-tittle">filter</h2>
          <div className="num-of-product">
            {" "}
            number of products{props.filterProducts.length}
          </div>
          <div className="filter-by-size">
            <span>filter</span>
            <select
              value={props.size}
              className="filter-select"
              onChange={(e) =>
                props.filteredSize(props.products, e.target.value)
              }
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
              onChange={(e) =>
                props.filteredorder(props.filterProducts, e.target.value)
              }
              className="filter-select"
              name=""
              id=""
            >
              <option value="latest">latest</option>
              <option value="lowest">lowest</option>
              <option value="highest">highest</option>
            </select>
          </div>
        </div>
      )}
    </Bounce>
  );
};

// export default Filter;
export default connect(
  (state) => {
    return {
      order: state.products.order,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  {
    filteredSize,
    filteredorder,
  }
)(Filter);
