"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image"

export default function OurProcess(){
    return(
        <div className="home-secE sec-pad-all bgprime">
            <div className="main_wrapper">
                <div className="heading">
                    <h2>Our Process</h2>
                </div>
                <div className="process_wrapper">
                    <Swiper 
                        className="process-slider"
                        loop={true}
                        // autoplay={{ delay: 2000, disableOnInteraction: false,}}
                        direction="vertical"
                        slidesPerView ={1}
                        spaceBetween={50}
                        speed={1800}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="process_col flex">
                                <div className="colA">
                                    <figure>
                                        <Image src="/assets/images/other/process1.jpg" width={256} height={310} alt="Process Image"></Image>
                                    </figure>
                                </div>
                                <div className="colB">
                                    <div className="content">
                                        <h3>Discovery</h3>
                                        <p>We begin by understanding your lifestyle, aspirations, and practical needs through in-depth consultation and space assessment.</p>
                                    </div>
                                </div>
                                <div className="colC">
                                    <figure>
                                        <Image src="/assets/images/other/process1.jpg" width={256} height={310} alt="Process Image"></Image>
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="process_col flex">
                                <div className="colA">
                                    <figure>
                                        <Image src="/assets/images/other/process1.jpg" width={256} height={310} alt="Process Image"></Image>
                                    </figure>
                                </div>
                                <div className="colB">
                                    <div className="content">
                                        <h3>Discovery</h3>
                                        <p>We begin by understanding your lifestyle, aspirations, and practical needs through in-depth consultation and space assessment.</p>
                                    </div>
                                </div>
                                <div className="colC">
                                    <figure>
                                        <Image src="/assets/images/other/process1.jpg" width={256} height={310} alt="Process Image"></Image>
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="process_col flex">
                                <div className="colA">
                                    <figure>
                                        <Image src="/assets/images/other/process1.jpg" width={256} height={310} alt="Process Image"></Image>
                                    </figure>
                                </div>
                                <div className="colB">
                                    <div className="content">
                                        <h3>Discovery</h3>
                                        <p>We begin by understanding your lifestyle, aspirations, and practical needs through in-depth consultation and space assessment.</p>
                                    </div>
                                </div>
                                <div className="colC">
                                    <figure>
                                        <Image src="/assets/images/other/process1.jpg" width={256} height={310} alt="Process Image"></Image>
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}