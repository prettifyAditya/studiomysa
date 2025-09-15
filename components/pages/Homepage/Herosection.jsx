"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import Image from "next/image"
import { Autoplay } from "swiper/modules";

export default function Herosection(){
    return(
        <div className="banner home-banner">
            <div className="bg"> 
                <video src="/assets/video/homepage/hero-video.mp4" poster="/assets/video/homepage/hero-video-poster.png" autoPlay muted loop playsInline></video>
                <div className="banner-wrapper">
                    <div className="main_wrapper">
                        <div className="heading"> 
                            <div className="text-slider">
                                <Swiper 
                                    autoplay={{ delay: 1000, disableOnInteraction: false,}}
                                    direction="vertical"
                                    slidesPerView ={1}
                                    speed={1500}
                                    modules={[Autoplay]}
                                >
                                    <SwiperSlide>
                                        <h2>design</h2>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h2>build</h2>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h2>live</h2>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <p>Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs.</p>
                        </div>
                        <button type="button" className="scrollBtn">
                            <Image src="/assets/icon/scroll.svg" width={45} height={45} alt="Scroll down button"></Image>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}