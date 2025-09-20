"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import Image from "next/image"
import { Autoplay } from "swiper/modules";

const sliderContent = [
    {
        heading: "IDEATE",
        content: "From dream homes to dynamic workspaces."
    },
    {
        heading: "CREATE",
        content: "Spaces that inspire. Designs that deliver."
    },
    {
        heading: "DESIGN",
        content: "On-time. On-point. Designed with precision."
    },
    {
        heading: "BUILD",
        content: "Design beyond aesthetics. Execution beyond promises."
    },
    {
        heading: "LIVE",
        content: "Experience the comfort of thoughtful spaces, built for the way you live."
    },
]

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
                                    {
                                        sliderContent.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <h2>{item.heading}</h2>
                                                <p>{item.content}</p>
                                            </SwiperSlide>
                                        )) 
                                    }
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