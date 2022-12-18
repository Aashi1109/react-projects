import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>Products Page</h1>

      <ul>
        <li><Link to='/products/1'>A book</Link></li>
        <li><Link to='/products/2'>Online Course</Link></li>
        <li><Link to='/products/3'>Remote Control Car</Link></li>
      </ul>
    </section>
  );
};

export default Product;
