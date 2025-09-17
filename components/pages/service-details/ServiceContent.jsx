"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton2 from "@/components/atoms/SwiperButton2"

export default function ServiceContent({ reference }){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="serviceD-secA sec-pad-all bgprime" ref={reference}>
            <div className="container">
                <div className="heading">
                    <p>We craft interiors that balance functionality with timeless elegance. From residential spaces to commercial environments, our designs reflect individuality, purpose, and comfort. Every detail—from color palettes to textures and lighting—is thoughtfully curated to create spaces that inspire and endure.</p>
                </div>
                <div className="content_wrapper">
                    <div className="swiper-nav content-nav buttonbg center-full">
                        <SwiperButton2 classname="swiper-prev content-prev" />
                        <SwiperButton2 classname="swiper-next content-next" />
                    </div>
                    <Swiper 
                        ref={swiperRef}
                        className="content_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".content-prev",
                            nextEl: ".content-next"
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
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <div className="content-col">
                                <h6>Customized Office Interiors Reflecting Your Brand</h6>
                                <p>We begin by understanding your company's vision, culture, and operational needs. This collaborative approach allows us to craft office interiors that embody your brand's ethos, creating an environment where employees feel motivated and clients gain a positive impression.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content-col">
                                <h6>Optimized Space Planning and Functional Design</h6>
                                <p>We begin by understanding your company's vision, culture, and operational needs. This collaborative approach allows us to craft office interiors that embody your brand's ethos, creating an environment where employees feel motivated and clients gain a positive impression.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content-col">
                                <h6>Customized Office Interiors Reflecting Your Brand</h6>
                                <p>We begin by understanding your company's vision, culture, and operational needs. This collaborative approach allows us to craft office interiors that embody your brand's ethos, creating an environment where employees feel motivated and clients gain a positive impression.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content-col">
                                <h6>Optimized Space Planning and Functional Design</h6>
                                <p>We begin by understanding your company's vision, culture, and operational needs. This collaborative approach allows us to craft office interiors that embody your brand's ethos, creating an environment where employees feel motivated and clients gain a positive impression.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}