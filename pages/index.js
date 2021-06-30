import Hero from "@/components/Hero";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Slider from "@/components/Slider";

import { getAllProductsInCollection } from "@/lib/shopify";

function IndexPage({ products }) {
  return (
    <div className="md:w-full w-full mx-auto">
      <Hero />
      <Slider />
      <NewsletterSubscribe />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection();

  return {
    props: {
      products,
    },
  };
}

export default IndexPage;
