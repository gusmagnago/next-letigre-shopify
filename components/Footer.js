import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [isShown, setIsShown] = useState(false);

  return (
    <footer className="font-primary h- flex flex-col py-4">
      <div className="justify-evenly flex p-4 uppercase">
        <Link href="/about" passHref>
          <a className="hover:text-palette-dark">Our Story</a>
        </Link>
        <Link href="#" passHref>
          <a className="hover:text-palette-dark">Shipping + Delivery</a>
        </Link>
        <Link href="/privacy-policy" passHref>
          <a className="hover:text-palette-dark">Privacy Policy</a>
        </Link>
        <Link href="/returns" passHref>
          <a className="hover:text-palette-dark">Returns Policy</a>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-2 text-xs">
        <p>© LE TIGRE</p>
        <Link href="/contact" passHref>
          <a
            className="hover:text-palette-dark p-2"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            Talk to us
          </a>
        </Link>
        {isShown && (
          <div className="flex items-center">
            we would love to hear you
            <FontAwesomeIcon
              icon={faHeart}
              className="text-palette-dark inline-flex w-2 mb-1 ml-1"
            />
          </div>
        )}
      </div>
    </footer>
  );
}
export default Footer;
