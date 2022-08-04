import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <Link to={{ pathname: "/orders" }}>
      <h1>Orders</h1>
    </Link>
  );
};

export default Orders;
