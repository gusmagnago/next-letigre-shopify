import ProductImage from "@/components/ProductImage";
import ProductDetails from "@/components/ProductDetails";

function ProductSection({ productData }) {
  return (
    <div className="md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 flex flex-col items-center justify-center w-11/12 h-screen max-w-6xl mx-auto space-y-8">
      <ProductImage images={productData.images.edges} />
      <ProductDetails productData={productData} />
    </div>
  );
}

export default ProductSection;
