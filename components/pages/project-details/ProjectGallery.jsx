"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton2 from "@/components/atoms/SwiperButton2"
import Image from "next/image";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function ProjectGallery(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); 
    }, []);
    return(
        <div className="projectD-secB sec-pad-all bgprime">
            <div className="project_gallery_wrapper">
                <div className="swiper-nav gallery-nav group buttonbg-white">
                    <SwiperButton2 classname="swiper-prev gallery-prev" />
                    <SwiperButton2 classname="swiper-next gallery-next" />
                </div>
                <Swiper 
                    ref={swiperRef}
                    className="gallery_slider"
                    modules={[Navigation]}
                    slidesPerView={1}
                    speed={1000}
                    navigation={{
                        prevEl: ".gallery-prev",
                        nextEl: ".gallery-next"
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                        },
                        540: {
                            slidesPerView: 1.4,
                            spaceBetween: 10,
                        },
                        991: {
                            slidesPerView: 1.4,
                            spaceBetween: 20,
                        },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide>
                        <div className="gallery-col">
                            <Link className="figure" href="/assets/images/other/gallery1.jpg" data-fancybox="gallery">
                                <Image src="/assets/images/other/gallery1.jpg" width={930} height={576} alt="Project Gallery Image"></Image>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery-col">
                            <Link className="figure" href="/assets/images/other/gallery1.jpg" data-fancybox="gallery">
                                <Image src="/assets/images/other/gallery1.jpg" width={930} height={576} alt="Project Gallery Image"></Image>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="gallery-col">
                            <Link className="figure" href="/assets/images/other/gallery1.jpg" data-fancybox="gallery">
                                <Image src="/assets/images/other/gallery1.jpg" width={930} height={576} alt="Project Gallery Image"></Image>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}