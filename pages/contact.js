import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`;

  return (
    <div className="container h-full mx-auto mb-20">
      <SEO title={pageTitle} />
      <PageTitle text="TALK TO US" />
      <div className="max-w-sm px-2 mx-auto space-y-4">
        <text className="text-lg font-bold">Customer Care</text>
        <p>
          Need help with something, have a question, wants to be partner, or
          just want to chat to us?
        </p>
        <p>
          Send us your letter and we’ll get back to you
          <text className="font-semibold"> as soon as we can.</text>
        </p>
        <p>
          We speak English, Portuguese and Spanish, but feel free to talk to us
          your own way, we will figure out how to make the best for you!
        </p>
        <p className=" font-bold">customercare@letigrestore.com</p>
      </div>
    </div>
  );
}
export default CartPage;
