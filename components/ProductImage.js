import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images[0].node);
  const ref = useRef();

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <div className="md:w-1/2 w-full max-w-md bg-white">
      <div className="card-img relative">
        <Image
          src={mainImg.originalSrc}
          alt={mainImg.altText}
          layout="fill"
          className="hover:scale-105 duration-500 ease-in-out transform"
        />
      </div>
      <div className="border-palette-lighter relative flex border-t">
        <button
          aria-label="left-scroll"
          className="bg-palette-lighter hover:bg-palette-light filter backdrop-filter backdrop-blur bg-opacity-30 absolute left-0 z-10 h-full opacity-75"
          onClick={() => scroll(-300)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-palette-primary w-3 mx-1"
          />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="border-palette-lighter flex w-full h-48 space-x-1 overflow-auto border-t"
        >
          {images.map((imgItem, index) => (
            <button
              key={index}
              className=" relative flex-shrink-0 w-40 h-auto rounded-sm"
              onClick={() => setMainImg(imgItem.node)}
            >
              <Image
                src={imgItem.node.originalSrc}
                alt={imgItem.node.altText}
                layout="fill"
                className="h-auto"
              />
            </button>
          ))}
        </div>
        <button
          aria-label="right-scroll"
          className="bg-palette-lighter hover:bg-palette-light absolute right-0 z-10 h-full opacity-75"
          onClick={() => scroll(300)}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-palette-primary w-3 mx-1"
          />
        </button>
      </div>
    </div>
  );
}
export default ProductImage;
