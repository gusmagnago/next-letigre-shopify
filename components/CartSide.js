import { useState, useEffect } from "react";
import { useUpdateCartQuantityContext } from "@/context/Store";
import { getCartSubTotal } from "@/utils/helpers";
import Link from "next/link";
import Price from "@/components/Price";

function CartSide({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));
  }, [cart]);

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity);
  }

  return (
    <div className="text-palette-primary h-96 bg-palette-lighter font-primary filter backdrop-filter backdrop-blur bg-opacity-30 mt-9 w-96 absolute z-0 flex grid h-auto grid-cols-3 gap-4 -ml-10 space-x-4">
      {cartItems.map((item) => (
        <div>
          <img
            src={item.productImage.originalSrc}
            alt={item.productImage.altText}
            height={64}
            width={64}
            {...console.log("open")}
          />
        </div>
      ))}
    </div>
  );
}

export default CartSide;
