import React, { useRef, useState } from 'react';

import Slide1 from "../../assets/image/Slide1.jpeg";
import Slide2 from "../../assets/image/Slide2.jpeg";
import Slide3 from "../../assets/image/Slide3.jpeg";

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



function ImageSlider() {
  
  return (
     <>
     {/* <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
     </>
    //      <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>
    
  )

}

export default ImageSlider