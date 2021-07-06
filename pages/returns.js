import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";

function ReturnPolicy() {
  const pageTitle = `Cart | ${process.env.siteTitle}`;

  return (
    <div className=" h-full mx-auto mb-20">
      <SEO title={pageTitle} />
      <PageTitle text="RETURN POLICY" />
      <div className="w-10/12 px-2 mx-auto space-y-4">
        <p>
          We have a 30-day return policy, which means you have 30 days after
          receiving your item to request a return.
        </p>
        <p>
          To be eligible for a return, your item must be in the same condition
          that you received it, unworn or unused, with tags, and in its original
          packaging. You’ll also need the receipt or proof of purchase.
        </p>
        <p>
          To start a return, you can contact us at
          <text> customercare@letigrestore.com</text>. If your return is
          accepted, we’ll send you a return shipping label, as well as
          instructions on how and where to send your package. Items sent back to
          us without first requesting a return will not be accepted.
        </p>
        <p className="pb-6">
          You can always contact us for any return question at
          <text> customercare@letigrestore.com</text>.
        </p>
        <text className="text-lg font-bold">Damages and issues</text>
        <p className="pb-6">
          Please inspect your order upon reception and contact us immediately,
          with clear images, if the item is defective, damaged or if you receive
          the wrong item, so that we can evaluate the issue and make it right.
        </p>
        <text className="text-lg font-bold">
          Exceptions / non-returnable items
        </text>
        <p className="pb-6">
          Unfortunately, we cannot accept returns on sale items or gift cards.
        </p>
        <text className="text-lg font-bold">Exchanges</text>
        <p className="pb-6">
          The fastest way to ensure you get what you want is to return the item
          you have, and once the return is accepted, make a separate purchase
          for the new item. Please be sure that you are following all the
          returns policy above mentioned before exchanging.
        </p>
        <text className="text-lg font-bold">Refunds</text>
        <p>
          We will notify you once we’ve received and inspected your return, and
          let you know if the refund was approved or not. If approved, you’ll be
          automatically refunded on your original payment method. Please
          remember it can take some time for your bank or credit card company to
          process and post the refund too.
        </p>
      </div>
    </div>
  );
}
export default ReturnPolicy;
