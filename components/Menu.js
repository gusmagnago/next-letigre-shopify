import { useState } from "react";
import Link from "next/link";
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggle = () => setOpenMenu(!openMenu);

  Menu.handleClickOutside = () => setOpenMenu(false);

  return (
    <div>
      <FontAwesomeIcon
        className="text-palette-primary w-6 m-auto"
        type="button"
        icon={faBars}
        onClick={toggle}
      />
      {openMenu && (
        <div
          className="text-palette-primary fade-in bg-palette-lighter font-primary filter backdrop-filter backdrop-blur bg-opacity-30 mt-9 absolute z-0 flex w-auto -ml-10 space-x-4"
          onClick={Menu.handleClickOutside}
        >
          <ul className="font-primary focus:ring-1 focus:ring-palette-light focus:outline-none font-semibold leading-relaxed tracking-wider uppercase">
            <Link href="/collections/rings">
              <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
                <a>Rings</a>
              </li>
            </Link>
            <Link href="/collections/bracelets">
              <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
                <a>Bracelets</a>
              </li>
            </Link>
            <Link href="/collections/necklaces">
              <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
                <a>Necklaces</a>
              </li>
            </Link>
            <Link href="/about">
              <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
                <a>Our Story</a>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Menu.handleClickOutside,
};

export default onClickOutside(Menu, clickOutsideConfig);
