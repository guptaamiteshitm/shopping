import React, { useEffect } from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";
import {
  addProductList,
} from "../../redux/Shopping/shopping-actions";
const Products = ({ products, addProductList }) => {

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(data => {
        addProductList(data);
      });
  }, []);
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductList: (list) => dispatch(addProductList(list)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
