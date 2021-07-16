import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

function EmptyCart() {
  return (
    <div className="sm:min-w-screen text-palette-primary bg-palette-lighter font-primary filter backdrop-filter backdrop-blur bg-opacity-30 mt-9 w-96 fixed right-0 z-50 h-auto p-4">
      <p className=" flex flex-col items-center text-center">
        <FontAwesomeIcon
          icon={faSadCry}
          className="text-palette-primary w-10 m-4"
        />
        Your cart is empty
      </p>

      <Link href="/products" passHref>
        <div className="focus:outline-none bg-palette-lighter h-11 font-primary hover:bg-palette-black hover:text-white w-full py-2 mt-4 text-lg font-semibold leading-relaxed tracking-widest text-center text-black cursor-pointer">
          <a>SHOP NOW</a>
        </div>
      </Link>
    </div>
  );
}
export default EmptyCart;
