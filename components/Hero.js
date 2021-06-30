/* import PageTitle from "@/components/PageTitle"; */

function StoreHeading() {
  return (
    <div className="bg-hero-pattern flex flex-row justify-center h-screen bg-center bg-no-repeat bg-cover">
      <a
        href="/products"
        className="bg-palette-lighter filter backdrop-filter backdrop-blur h-11 top-3/4 font-primary focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-black hover:text-white bg-opacity-30 absolute flex justify-center w-full pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black"
      >
        SHOP NOW
      </a>
    </div>
  );
}
export default StoreHeading;