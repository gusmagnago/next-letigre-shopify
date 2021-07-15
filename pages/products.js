import ProductListings from "@/components/ProductListings";
import { getAllProductsInCollection } from "@/lib/shopify";

function Products({ products }) {
  return (
    <div className="min-h-screen">
      <ProductListings products={products} />
    </div>
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
