import React, { useState, useEffect, useRef } from "react";
import { useCartContext } from "@/context/Store";
import CartSide from "@/components/CartSide";
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const cart = useCartContext()[0];
  const [cartItems, setCartItems] = useState(0);
  const [openCart, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!openCart);

  Cart.handleClickOutside = () => setCartOpen(false);

  useEffect(() => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.variantQuantity;
    });
    setCartItems(numItems);
  }, [cart]);

  return (
    <>
      <FontAwesomeIcon
        className="text-palette-primary w-6 m-auto cursor-pointer"
        icon={faShoppingBag}
        onClick={toggleCart}
      />
      {cartItems === 0 ? null : (
        <div className="bg-palette-dark filter backdrop-filter backdrop-blur bg-opacity-30 absolute top-0 right-0 px-2 py-1 text-xs font-semibold text-gray-900 transform translate-x-10 -translate-y-3 rounded-full">
          {cartItems}
        </div>
      )}
      {openCart && <CartSide cart={cart} onClick={Cart.handleClickOutside} />}
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Cart.handleClickOutside,
};

export default onClickOutside(Cart, clickOutsideConfig);
