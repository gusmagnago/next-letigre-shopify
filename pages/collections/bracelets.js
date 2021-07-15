import ProductListings from "@/components/ProductListings";
import { getAllProductsInBraceletsCollection } from "@/lib/shopify-bracelets";
import SEO from "@/components/SEO";

function Rings({ products }) {
  const pageTitle = `BRACELETS | ${process.env.siteTitle}`;
  return (
    <div className="min-h-screen">
      <SEO title={pageTitle} />
      <ProductListings products={products} />
    </div>
  );
}

export default Rings;

export async function getStaticProps() {
  const products = await getAllProductsInBraceletsCollection();

  return {
    props: {
      products,
    },
  };
}
