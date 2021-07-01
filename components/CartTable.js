import { useState, useEffect, useRef } from "react";
import { useUpdateCartQuantityContext } from "@/context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Price from "@/components/Price";
import { getCartSubTotal } from "@/utils/helpers";

function CartTable({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));
  }, [cart]);

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity);
  }

  return (
    <div className=" sm:my-8 w-full max-w-2xl mx-auto my-4">
      <table className="mx-auto">
        <thead>
          <tr className=" sm:text-sm text-palette-primary border-palette-primary text-xs uppercase border-b">
            <th className="font-primary px-6 py-4 font-normal">Product</th>
            <th className="font-primary px-6 py-4 font-normal">Quantity</th>
            <th className="font-primary sm:table-cell hidden px-6 py-4 font-normal">
              Price
            </th>
            <th className="font-primary px-6 py-4 font-normal">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-palette-lighter divide-y">
          {cartItems.map((item) => (
            <tr
              key={item.variantId}
              className="sm:text-base text-sm text-center text-gray-600 uppercase"
            >
              <td className="font-primary sm:px-6 flex items-center px-4 py-4 font-medium">
                <img
                  src={item.productImage.originalSrc}
                  alt={item.productImage.altText}
                  width={100}
                  className={`hidden sm:inline-flex`}
                />
                <Link passHref href={`/products/${item.productHandle}`}>
                  <a className="hover:text-palette-dark p-1">
                    {item.productTitle}, {item.variantTitle}
                  </a>
                </Link>
              </td>
              <td className="font-primary sm:px-6 px-4 py-4 font-medium">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.variantQuantity}
                  onChange={(e) => updateItem(item.variantId, e.target.value)}
                  className="form-input focus:border-palette-dark focus:ring-palette-dark w-16 text-gray-900"
                />
              </td>
              <td className="font-primary sm:px-6 sm:table-cell hidden px-4 py-4 text-base font-light">
                <Price currency="€" num={item.variantPrice} numSize="text-lg" />
              </td>
              <td className="font-primary sm:px-6 px-4 py-4 font-medium">
                <button
                  aria-label="delete-item"
                  className=""
                  onClick={() => updateItem(item.variantId, 0)}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-palette-primary border-palette-primary hover:bg-palette-lighter w-8 h-8 p-1 border"
                  />
                </button>
              </td>
            </tr>
          ))}
          {subtotal === 0 ? null : (
            <tr className="text-center border-t-2">
              <td></td>
              <td className="font-primary sm:px-6 px-4 py-4 text-base font-semibold text-gray-600 uppercase">
                Subtotal
              </td>
              <td className="font-primary text-palette-primary sm:px-6 px-4 py-4 text-lg font-medium">
                <Price currency="€" num={subtotal} numSize="text-xl" />
              </td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default CartTable;
