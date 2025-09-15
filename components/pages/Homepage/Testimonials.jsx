"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton from "@/components/atoms/SwiperButton"
import Image from "next/image";
import TestimonialCol from "@/components/molecules/TestimonialCol";

export default function Testimonials(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="home-secG sec-pad-all bgprime">
            <div className="main_wrapper">
                <div className="upper_sec">
                    <h2>testimonials</h2>
                    <div className="swiper-nav testimonial-nav no_bg group">
                        <SwiperButton classname="swiper-prev testimonial-prev" />
                        <SwiperButton classname="swiper-next testimonial-next" />
                    </div>
                </div>
                <div className="testimonial_wrapper">
                    <Swiper 
                        ref={swiperRef}
                        className="testimonial_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next"
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <TestimonialCol imgSrc="/assets/images/other/testimonial.jpg" Name={"Name Here"} Place={"Gurugram"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCol imgSrc="/assets/images/other/testimonial.jpg" Name={"Name Here"} Place={"Gurugram"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCol imgSrc="/assets/images/other/testimonial.jpg" Name={"Name Here"} Place={"Gurugram"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCol imgSrc="/assets/images/other/testimonial.jpg" Name={"Name Here"} Place={"Gurugram"} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}