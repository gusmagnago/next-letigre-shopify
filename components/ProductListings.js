import ProductCard from "@/components/ProductCard";

function ProductListings({ products }) {
  return (
    <div className="sm:grid-cols-2 lg:grid-cols-4 grid mx-auto">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
export default ProductListings;
