import { useState } from "react";
import BackToProductButton from "@/components/BackToProductButton";
import ProductInfo from "@/components/ProductInfo";
import ProductForm from "@/components/ProductForm";

function ProductDetails({ productData }) {
  const [variantPrice, setVariantPrice] = useState(
    productData.variants.edges[0].node.price
  );

  return (
    <div className="md:w-1/2 min-h-128 flex flex-col justify-between w-full h-full max-w-xs mx-auto space-y-4">
      <ProductInfo
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges}
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
      <BackToProductButton />
    </div>
  );
}

export default ProductDetails;
