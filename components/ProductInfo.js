import Price from "@/components/Price";

function ProductInfo({ title, description, price }) {
  return (
    <div className=" font-primary">
      <h1 className="text-palette-primary sm:py-4 py-2 text-3xl font-extrabold leading-relaxed">
        {title}
      </h1>
      <p className="text-lg font-medium">{description}</p>
      <div className="text-palette-primary px-1 py-4 text-xl font-medium">
        <Price currency="$" num={price} numSize="text-2xl" />
      </div>
    </div>
  );
}

export default ProductInfo;
