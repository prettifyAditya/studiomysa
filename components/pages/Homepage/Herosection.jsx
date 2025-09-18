"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import Image from "next/image"
import { Autoplay } from "swiper/modules";

export default function Herosection({ scrollto }){
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
                                        <h2>IDEATE</h2>
                                        <p>From dream homes to dynamic workspaces.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h2>CREATE</h2>
                                        <p>Spaces that inspire. Designs that deliver.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h2>DESIGN</h2>
                                        <p>On-time. On-point. Designed with precision.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h2>BUILD</h2>
                                        <p>Design beyond aesthetics. Execution beyond promises.</p>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <h2>LIVE</h2>
                                        <p>Experience the comfort of thoughtful spaces, built for the way you live.</p>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <button type="button" className="scrollBtn" onClick={scrollto}>
                            <Image src="/assets/icon/scroll.svg" width={45} height={45} alt="Scroll down button"></Image>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}