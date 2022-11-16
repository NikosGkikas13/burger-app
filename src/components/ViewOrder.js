import React, { useEffect } from "react";
import "../css/order.css";

const ViewOrder = ({ burgerIng }) => {
  const baseUrl = "https://xm-crm-react-exercise-server.herokuapp.com/img/";

  return (
    <div className="order">
      <img src={`${baseUrl}bun_top.png`} />
      <div className="order-ingredients">
        {burgerIng.map((item, index) => {
          return (
            <img
              style={{ zIndex: index }}
              key={index}
              src={`${baseUrl + item}`}
              alt=""
            />
          );
        })}
      </div>
      <img src={`${baseUrl}bun_bottom.png`} />
    </div>
  );
};

export default ViewOrder;
