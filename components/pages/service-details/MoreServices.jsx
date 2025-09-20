"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton2 from "@/components/atoms/SwiperButton2"
import Image from "next/image";
import ServicesCol from "@/components/molecules/ServicesCol";

export default function MoreServices(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="serviceD-secC sec-pad-all bgprime">
            <div className="container">
                <div className="heading text-center">
                    <h2>More services</h2>
                </div>
                <div className="more_services_wrapper">
                    <div className="swiper-nav more-nav buttonbg center-full">
                        <SwiperButton2 classname="swiper-prev more-prev" />
                        <SwiperButton2 classname="swiper-next more-next" />
                    </div>
                    <Swiper 
                        ref={swiperRef}
                        className="more_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".more-prev",
                            nextEl: ".more-next"
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            540: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <ServicesCol
                                imgSrc="/assets/images/other/service1.jpg"
                                serviceName="Landscape Design"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServicesCol
                                imgSrc="/assets/images/other/service1.jpg"
                                serviceName="Landscape Design"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServicesCol
                                imgSrc="/assets/images/other/service1.jpg"
                                serviceName="Landscape Design"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServicesCol
                                imgSrc="/assets/images/other/service1.jpg"
                                serviceName="Landscape Design"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}