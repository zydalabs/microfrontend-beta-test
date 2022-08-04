import React, { useState, useEffect } from "react";
import "./App.css";
import { arrayOfOrders } from "./constants";

function OrderDetail(props) {
  const [orderDetail, setOrderDetail] = useState({});
  console.log(
    "🚀 ~ file: OrderDetails.js ~ line 7 ~ OrderDetail ~ orderDetail",
    orderDetail
  );

  useEffect(() => {
    const orderID = parseInt(props.match.params.orderid);
    const index = arrayOfOrders.findIndex((order) => order.orderId === orderID);
    if (index !== -1) {
      setOrderDetail(arrayOfOrders[index]);
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card">
          {Object.keys(orderDetail).length > 0 && (
            <>
              <p>{`#${orderDetail.orderId}`}</p>
              <p>{orderDetail.orderNumber}</p>
              <p>{orderDetail.orderItem}</p>
            </>
          )}
          {Object.keys(orderDetail).length === 0 && (
            <p>We're sorry, Cound't find Blog</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
