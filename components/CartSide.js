import { useState, useEffect } from "react";
import { useUpdateCartQuantityContext } from "@/context/Store";
import { getCartSubTotal } from "@/utils/helpers";
import Link from "next/link";
import Price from "@/components/Price";
import { useCartContext } from "@/context/Store";

function CartSide({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [checkoutUrl] = useCartContext();

  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));
  }, [cart]);

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity);
  }

  return (
    <div className="text-palette-primary h-96 bg-palette-lighter p-4 right-0 font-primary filter backdrop-filter backdrop-blur bg-opacity-30 mt-9 w-1/4 absolute z-0  h-auto -ml-10 space-x-4 right-1.5">
      {cartItems.map((item) => (
        <div className="justify-evenly flex flex-row p-4" key={item.variantId}>
          <img
            src={item.productImage.originalSrc}
            alt={item.productImage.altText}
            width={100}
            className="m-1"
          />
          <Link passHref href={`/products/${item.productHandle}`}>
            <a className="hover:text-palette-dark flex flex-col pt-1 m-2">
              {item.productTitle}
              <br />
              Size / Color: {item.variantTitle}
            </a>
          </Link>
          <div className=" flex flex-col items-center m-2">
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
      <div className="h-auto p-4 border-t-2">
        {subtotal === 0 ? null : (
          <div className="flex flex-row justify-between">
            <p>Subtotal:</p>
            <div>
              <Price currency="€" num={subtotal} numSize="text-md" />
            </div>
          </div>
        )}
        <Link href="/cart" passHref>
          <div className="focus:outline-none bg-palette-lighter h-11 font-primary hover:bg-palette-black hover:text-white w-full pt-2 pb-2 mt-4 text-lg font-semibold leading-relaxed tracking-widest text-center text-black cursor-pointer">
            <a>CONFIRM</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default CartSide;
