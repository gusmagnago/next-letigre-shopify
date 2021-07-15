import ProductListings from "@/components/ProductListings";
import { getAllProductsInNecklacesCollection } from "@/lib/shopify-necklaces";
import SEO from "@/components/SEO";

function Rings({ products }) {
  const pageTitle = `NECKLACES | ${process.env.siteTitle}`;
  return (
    <div className="min-h-screen">
      <SEO title={pageTitle} />
      <ProductListings products={products} />
    </div>
  );
}

export default Rings;

export async function getStaticProps() {
  const products = await getAllProductsInNecklacesCollection();

  return {
    props: {
      products,
    },
  };
}
