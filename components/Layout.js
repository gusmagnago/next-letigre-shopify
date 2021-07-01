import { CartProvider } from "@/context/Store";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function Layout({ children }) {
  return (
    <CartProvider>
      <div className="font-primary min-h-screen">
        <Nav />
        <main>{children}</main>
        {/*  <Footer /> */}
      </div>
    </CartProvider>
  );
}

export default Layout;
