import { useState, useEffect } from "react";
import Link from "next/link";

import { useCartContext } from "@/context/Store";
import Menu from "@/components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const cart = useCartContext()[0];
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.variantQuantity;
    });
    setCartItems(numItems);
  }, [cart]);

  return (
    <header className="border-palette-lighter sticky top-0 z-20 bg-white border-b">
      <div className="md:pt-6 z-40 flex items-center justify-between max-w-6xl px-6 pt-4 pb-2 mx-auto">
        <div>
          <a className=" relative" aria-label="cart">
            <Menu />
          </a>
        </div>
        <Link href="/" passHref>
          <a className="hover:scale-105 duration-500 ease-in-out transform cursor-pointer">
            <img width="180" alt="logo" src="/logo.png" />
          </a>
        </Link>
        <div>
          <Link href="/cart" passHref>
            <a className=" relative" aria-label="cart">
              <FontAwesomeIcon
                className="text-palette-primary w-6 m-auto"
                icon={faShoppingBag}
              />
              {cartItems === 0 ? null : (
                <div className="bg-palette-lighter filter backdrop-filter backdrop-blur bg-opacity-30 absolute top-0 right-0 px-2 py-1 text-xs font-semibold text-gray-900 transform translate-x-10 -translate-y-3 rounded-full">
                  {cartItems}
                </div>
              )}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Nav;
