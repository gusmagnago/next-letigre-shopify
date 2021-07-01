import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BackToProductButton() {
  return (
    <Link href="/products" passHref>
      <a
        aria-label="back-to-products"
        className=" border-palette-primary bg-palette-lighter filter backdrop-filter backdrop-blur h-11 font-primary focus:outline-none hover:bg-palette-black hover:text-white bg-opacity-30 flex justify-center w-full pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black border"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="inline-flex w-4 mr-2" />
        Back To All Products
      </a>
    </Link>
  );
}

export default BackToProductButton;
