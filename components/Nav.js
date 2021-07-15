import Link from "next/link";
import Menu from "@/components/Menu";
import Cart from "@/components/Cart";

function Nav() {
  return (
    <header className="border-palette-lighter sticky top-0 z-20 bg-white border-b">
      <div className="z-40 flex items-center justify-between max-w-6xl px-6 py-2 mx-auto">
        <div>
          <a className="relative cursor-pointer" aria-label="menu">
            <Menu />
          </a>
        </div>
        <Link href="/" passHref>
          <a className="hover:scale-105 duration-500 ease-in-out transform cursor-pointer">
            <img width="180" alt="logo" src="/logo.png" />
          </a>
        </Link>
        <div>
          <a className=" relative" aria-label="cart">
            <Cart />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Nav;
