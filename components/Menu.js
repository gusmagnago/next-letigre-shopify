import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div>
      <FontAwesomeIcon
        className="text-palette-primary w-6 m-auto"
        type="button"
        icon={faBars}
        onClick={() => setOpenMenu(!openMenu)}
      />
      {openMenu && (
        <div className="text-palette-primary bg-palette-lighter font-primary filter backdrop-filter backdrop-blur bg-opacity-30 mt-9 absolute z-0 flex w-auto -ml-10 space-x-4">
          <ul className="font-primary focus:ring-1 focus:ring-palette-light focus:outline-none font-semibold leading-relaxed tracking-wider uppercase">
            <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
              <a href="/collections/rings">Rings</a>
            </li>
            <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
              <a href="/collections/rings">Bracelets</a>
            </li>
            <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
              <a href="/collections/rings">Necklaces</a>
            </li>
            <li className="hover:bg-palette-black hover:text-white hover:w-full w-64 p-5">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Menu;
