import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CheckOutButton({ webUrl }) {
  return (
    <a
      href={webUrl}
      aria-label="checkout-products"
      className=" border-palette-primary bg-palette-lighter filter backdrop-filter backdrop-blur h-11 font-primary focus:outline-none hover:bg-palette-black hover:text-white bg-opacity-30 flex justify-center w-full pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black border"
      target="_blank"
    >
      Check Out
      <FontAwesomeIcon icon={faArrowRight} className="inline-flex w-4 ml-2" />
    </a>
  );
}
export default CheckOutButton;
