import React from "react";
import Cart from "../../components/Cart/Cart.jsx";

const CartPage = () => {
  const products = [];
  return (
    <section className={"container"}>
      <Cart products={products} />
    </section>
  );
};

export default CartPage;
