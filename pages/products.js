import ProductListings from "@/components/ProductListings";
import { getAllProductsInCollection } from "@/lib/shopify";

function Products({ products }) {
  return (
    <>
      <ProductListings products={products} />
    </>
  );
}

export default Products;

export async function getStaticProps() {
  const products = await getAllProductsInCollection();

  return {
    props: {
      products,
    },
  };
}
