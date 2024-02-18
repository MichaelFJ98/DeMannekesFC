import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../GallerySlider.css';

import slide_image_1 from '../assets/hairdresser/herobg.webp';
import slide_image_2 from '../assets/hairdresser/location.webp';
import slide_image_3 from '../assets/hairdresser/p1.webp';
import slide_image_4 from '../assets/hairdresser/p2.webp';

const GallerySlider = () => {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img
                        src={slide_image_1}
                        alt="Gallery Image"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_2}
                        alt="Gallery Image"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_3}
                        alt="Gallery Image"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_4}
                        alt="Gallery Image"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={slide_image_2}
                        alt="Gallery Image"
                        loading="lazy"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default GallerySlider;