"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton2 from "@/components/atoms/SwiperButton2"
import TestimonialCol from "@/components/molecules/TestimonialCol";

export default function TeamMember(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="about-secD sec-pad-all bgprime">
            <div className="container">
                <div className="upper-sec">
                    <div className="heading">
                        <h2>Management Team</h2>
                    </div>
                    <div className="swiper-nav team-nav buttonbg group">
                        <SwiperButton2 classname="swiper-prev team-prev" />
                        <SwiperButton2 classname="swiper-next team-next" />
                    </div>
                </div>
                <div className="team_wrapper">
                    <Swiper 
                        ref={swiperRef}
                        className="team_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".team-prev",
                            nextEl: ".team-next"
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
                                spaceBetween: 20,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
                            <TestimonialCol
                                classname="team-member"
                                imgSrc="/assets/images/about/team1.jpg"
                                Name="Name Here"
                                Place="Gurugram"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCol
                                classname="team-member"
                                imgSrc="/assets/images/about/team1.jpg"
                                Name="Name Here"
                                Place="Gurugram"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCol
                                classname="team-member"
                                imgSrc="/assets/images/about/team1.jpg"
                                Name="Name Here"
                                Place="Gurugram"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCol
                                classname="team-member"
                                imgSrc="/assets/images/about/team1.jpg"
                                Name="Name Here"
                                Place="Gurugram"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}