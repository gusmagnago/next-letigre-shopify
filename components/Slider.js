import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

function Slider() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="w-full">
        <Swiper
          tag="ul"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
        >
          <SwiperSlide tag="li">
            <div className="relative flex flex-row p-5 m-5">
              <div>
                <a
                  href="/collections/necklaces"
                  className=" top-3/4 left-1 bg-palette-lighter w-96 filter backdrop-filter backdrop-blur font-primary focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-black hover:text-white bg-opacity-30 absolute flex justify-center pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black"
                >
                  SHOP NECKLACES
                </a>
              </div>
              <div className=" w-full">
                <img src="/images/swipernecks.jpg" alt="rings" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li">
            <div className="relative flex flex-row p-5 m-5">
              <div className="w-full">
                <img src="/images/swiperrings.jpg" alt="rings" />
              </div>
              <div>
                <a
                  href="/collections/rings"
                  className=" top-3/4 right-1 bg-palette-lighter w-96 filter backdrop-filter backdrop-blur font-primary focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-black hover:text-white bg-opacity-30 absolute flex justify-center pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black"
                >
                  SHOP RINGS
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide tag="li">
            <div className="relative flex flex-row p-5 m-5">
              <div className="w-full">
                <img src="/images/swiperbracelets.jpg" alt="rings" />
              </div>
              <div>
                <a
                  href="/collections/bracelets"
                  className=" top-3/4 left-1 bg-palette-lighter w-96 filter backdrop-filter backdrop-blur font-primary focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-black hover:text-white bg-opacity-30 absolute flex justify-center pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-black"
                >
                  SHOP BRACELETS
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Slider;
