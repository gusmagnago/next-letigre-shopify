import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useCartContext, useAddToCartContext } from "@/context/Store";

function ProductForm({ title, handle, variants, setVariantPrice, mainImg }) {
  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState(variants[0].node.id);
  const [variant, setVariant] = useState(variants[0]);
  const isLoading = useCartContext()[2];
  const addToCart = useAddToCartContext();

  const atcBtnStyle = isLoading
    ? `mt-2 border-palette-primary cursor-pointer bg-palette-lighter filter backdrop-filter backdrop-blur h-11 font-primary focus:outline-none hover:bg-palette-black 
    hover:text-white bg-opacity-30 flex justify-center items-center w-full pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black border`
    : `mt-2 border-palette-primary cursor-pointer bg-palette-lighter filter backdrop-filter backdrop-blur h-11 font-primary focus:outline-none hover:bg-palette-black 
    hover:text-white bg-opacity-30 flex justify-center items-center  w-full pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black border`;

  function handleSizeChange(e) {
    setVariantId(e);

    const selectedVariant = variants.filter((v) => v.node.id === e).pop();
    setVariantPrice(selectedVariant.node.price);

    setVariant(selectedVariant);
  }

  async function handleAddToCart() {
    const varId = variant.node.id;

    if (quantity !== "") {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: quantity,
      });
    }
  }

  function updateQuantity(e) {
    if (e === "") {
      setQuantity("");
    } else {
      setQuantity(Math.floor(e));
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start w-full space-x-2">
        <div className="flex flex-col items-start flex-grow-0 space-y-1">
          <label className="text-base text-gray-500">Qty</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="form-input focus:border-palette-primary focus:ring-palette-primary w-16 text-gray-900"
          />
        </div>
        <div className="flex flex-col items-start flex-grow space-y-1">
          <label className="text-base text-gray-500">Size / Color</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange={(event) => handleSizeChange(event.target.value)}
            value={variantId}
            className="form-select focus:border-palette-primary focus:ring-palette-primary w-16 w-full text-gray-900"
          >
            {variants.map((item) => (
              <option id={item.node.id} key={item.node.id} value={item.node.id}>
                {item.node.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className={atcBtnStyle}
        aria-label="cart-button"
        onClick={handleAddToCart}
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingBag} className="w-5 ml-2" />
      </button>
    </div>
  );
}

export default ProductForm;
