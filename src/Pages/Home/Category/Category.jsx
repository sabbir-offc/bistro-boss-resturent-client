import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={`From 11:00am to 10:00pm`}
        heading={`ORDER ONLINE`}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="my-8"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h1 className="text-3xl absolute bottom-6 left-24 uppercase text-white -mt-16">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h1 className="text-3xl absolute bottom-6 left-24 uppercase text-white -mt-16">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h1 className="text-3xl absolute bottom-6 left-24 uppercase text-white -mt-16">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h1 className="text-3xl absolute bottom-6 left-24 uppercase text-white -mt-16">
            deserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h1 className="text-3xl absolute bottom-6 left-24 uppercase text-white -mt-16">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
