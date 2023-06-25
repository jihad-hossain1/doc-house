import React from "react";
import useCart from "../../../hook/useCart";

const MyCart = () => {
  const [cart] = useCart();

  return (
    <div>
      <h4 className="font-semibold text-3xl text-center">{cart.length}</h4>
    </div>
  );
};

export default MyCart;
