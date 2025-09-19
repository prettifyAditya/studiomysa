"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import SwiperButton2 from "@/components/atoms/SwiperButton2";
import BlogCol from "@/components/molecules/BlogCol";

export default function MoreBlogs(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="blog-detail-secB sec-pad-all bgprime">
            <div className="container">
                <div className="upper-sec">
                    <div className="heading">
                        <h2>Related Blogs</h2>
                    </div>
                    <div className="swiper-nav blogs-nav buttonbg group">
                        <SwiperButton2 classname="swiper-prev blogs-prev" />
                        <SwiperButton2 classname="swiper-next blogs-next" />
                    </div>
                </div>
                <div className="blog_wrapper">
                    <Swiper 
                        ref={swiperRef}
                        className="blogs_slider"
                        modules={[Navigation]}
                        slidesPerView={1}
                        speed={1000}
                        navigation={{
                            prevEl: ".blogs-prev",
                            nextEl: ".blogs-next"
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
                            <BlogCol
                                linkHref="/blogs"
                                imgSrc="/assets/images/other/testimonial.jpg"
                                date="07 May 2025"
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCol
                                linkHref="/blogs"
                                imgSrc="/assets/images/other/testimonial.jpg"
                                date="07 May 2025"
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCol
                                linkHref="/blogs"
                                imgSrc="/assets/images/other/testimonial.jpg"
                                date="07 May 2025"
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCol
                                linkHref="/blogs"
                                imgSrc="/assets/images/other/testimonial.jpg"
                                date="07 May 2025"
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCol
                                linkHref="/blogs"
                                imgSrc="/assets/images/other/testimonial.jpg"
                                date="07 May 2025"
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}