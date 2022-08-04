import React, { useState, useEffect } from "react";
import "./App.css";
import { arrayOfOrders } from "./constants";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1>Orders</h1>
        {arrayOfOrders.map((order, index) => {
          return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
              <div className="card">
                <Link
                  to={{
                    pathname: `orders/orderdetails/${order.orderId}`,
                    id: order.orderId,
                    item: order,
                  }}
                >
                  <div class="card-body">
                    <h5 class="card-title">{`#${order.orderId}`}</h5>
                    <p class="card-text">{order.orderItem}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
