import ProductListings from "@/components/ProductListings";
import { getAllProductsInRingsCollection } from "@/lib/shopify-rings";

function Rings({ products }) {
  return (
    <>
      <ProductListings products={products} />
    </>
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
