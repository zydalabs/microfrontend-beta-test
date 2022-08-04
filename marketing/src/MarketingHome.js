import React from "react";
import { Link } from "react-router-dom";

const MarketingHome = () => {
  return (
    <Link to={{ pathname: "/marketing" }}>
      <h1>Marketing</h1>
    </Link>
  );
};

export default MarketingHome;
