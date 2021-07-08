import ProductListings from "@/components/ProductListings";
import { getAllProductsInBraceletsCollection } from "@/lib/shopify-bracelets";

function Rings({ products }) {
  return (
    <>
      <ProductListings products={products} />
    </>
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
