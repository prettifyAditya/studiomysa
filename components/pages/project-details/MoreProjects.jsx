"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton2 from "@/components/atoms/SwiperButton2"
import ProjectCol from "@/components/molecules/ProjectCol";


export default function MoreProjects(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="projectD-secD sec-pad-all bgprime">
            <div className="container">
                <div className="heading text-center">
                    <h2>More Projects</h2>
                </div>
                <div className="more_projects_wrapper">
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
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}