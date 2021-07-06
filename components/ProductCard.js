import Image from "next/image";
import Link from "next/link";
import Price from "@/components/Price";

function ProductCard({ product }) {
  const handle = product.node.handle;
  const title = product.node.title;
  /* const description = product.node.description; */
  const price = product.node.variants.edges[0].node.price;
  const imageNode = product.node.images.edges[0].node;

  return (
    <Link href={`/products/${handle}`} passHref>
      <a className="w-72 mx-auto">
        <div className="h-80 relative w-full">
          <Image
            src={imageNode.originalSrc}
            alt={imageNode.altText}
            layout="fill"
            className="hover:scale-110 duration-500 ease-in-out transform"
          />
        </div>
        <div className="h-5 uppercase">
          <div className="font-primary text-palette-primary font-semibold">
            {title}
          </div>
          <div className="text-palette-primary font-primary bg-palette-lighter triangle text-base font-medium">
            <Price currency="€" num={price} numSize="text-md" />
          </div>
        </div>
      </a>
    </Link>
  );
}
export default ProductCard;
