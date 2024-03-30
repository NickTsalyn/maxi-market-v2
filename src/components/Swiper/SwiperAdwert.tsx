"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Thumbs,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import SwiperCore from "swiper";
import { images } from "../../app/lib/images";
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./SwiperStyles.css";

const SwiperAdwert: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: true,
    thumbs: { swiper: thumbsSwiper },
    modules: [Navigation, Pagination, Thumbs, Mousewheel, Keyboard, FreeMode],
  };

  return (
    <div className="container">
      <Swiper {...swiperParams} className="h-[707px] w-[1005px] rounded">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-[707px] w-[1005px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperAdwert;
