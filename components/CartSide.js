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
    <div className="sm:min-w-screen text-palette-primary bg-palette-lighter font-primary filter backdrop-filter backdrop-blur bg-opacity-30 mt-9 w-96 fixed right-0 h-auto p-4 m-2">
      {cartItems.map((item) => (
        <div className="justify-evenly flex flex-row" key={item.variantId}>
          <img
            src={item.productImage.originalSrc}
            alt={item.productImage.altText}
            width={100}
            className="m-1"
          />
          <Link passHref href={`/products/${item.productHandle}`}>
            <a className="hover:text-palette-dark flex flex-col pt-1 m-2 text-sm">
              {item.productTitle}
              <br />
              Size / Color: {item.variantTitle}
              <p className="text-xs">change</p>
            </a>
          </Link>
          <div className=" flex flex-col items-center m-2 text-sm">
            <p>quantity</p>
            <input
              type="number"
              inputMode="numeric"
              id="variant-quantity"
              name="variant-quantity"
              min="1"
              step="1"
              value={item.variantQuantity}
              onChange={(e) => updateItem(item.variantId, e.target.value)}
              className="focus:border-palette-light focus:ring-palette-light w-16 my-2 text-center text-gray-900 border border-gray-300 rounded-sm"
            />
            <button
              aria-label="delete-item"
              className="hover:text-palette-dark "
              onClick={() => updateItem(item.variantId, 0)}
            >
              <p>remove</p>
            </button>
          </div>
        </div>
      ))}
      <div className=" border-palette-primary mt-2 border-t-2">
        {subtotal === 0 ? null : (
          <div className="flex flex-row justify-between px-4 my-2">
            <p>Subtotal:</p>
            <div>
              <Price currency="€" num={subtotal} numSize="text-md" />
            </div>
          </div>
        )}
        <p className="flex justify-center text-xs">
          Shipping + taxes calculated at checkout
        </p>
        <Link href="/cart" passHref>
          <div className="focus:outline-none bg-palette-lighter h-11 font-primary hover:bg-palette-black hover:text-white w-full py-2 mt-4 text-lg font-semibold leading-relaxed tracking-widest text-center text-black cursor-pointer">
            <a>CONFIRM</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default CartSide;
