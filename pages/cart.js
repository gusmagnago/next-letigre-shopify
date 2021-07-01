import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import CartTable from "@/components/CartTable";
import CheckOutButton from "@/components/CheckOutButton";
import BackToProductButton from "@/components/BackToProductButton";
import { useCartContext } from "@/context/Store";

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`;
  const [cart, checkoutUrl] = useCartContext();

  return (
    <div className="container mx-auto mb-20">
      <SEO title={pageTitle} />
      <PageTitle text="Your Cart" />
      <CartTable cart={cart} />
      <div className="max-w-sm px-2 mx-auto space-y-4">
        <CheckOutButton webUrl={checkoutUrl} />
        <BackToProductButton />
      </div>
    </div>
  );
}

export default CartPage;
