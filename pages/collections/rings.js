import ProductListings from "@/components/ProductListings";
import { getAllProductsInRingsCollection } from "@/lib/shopify-rings";
import SEO from "@/components/SEO";

function Rings({ products }) {
  const pageTitle = `RINGS | ${process.env.siteTitle}`;
  return (
    <div className="min-h-screen">
      <SEO title={pageTitle} />
      <ProductListings products={products} />
    </div>
  );
}

export default Rings;

export async function getStaticProps() {
  const products = await getAllProductsInRingsCollection();

  return {
    props: {
      products,
    },
  };
}
