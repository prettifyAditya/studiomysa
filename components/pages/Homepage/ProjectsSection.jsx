"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image"
import Link from "next/link"

const projectImages = [
    {
        imgSrc : "/assets/images/other/project1.jpg"
    },
    {
        imgSrc : "/assets/images/other/project1.jpg"
    },
    {
        imgSrc : "/assets/images/other/project1.jpg"
    },
    {
        imgSrc : "/assets/images/other/project1.jpg"
    },
    {
        imgSrc : "/assets/images/other/project1.jpg"
    },
]
export default function ProjectsSection(){
    return(
        <div className="home-secD sec-pad-all bgprime">
            <div className="main_wrapper">
                <div className="heading">
                    <h2>projects</h2>
                </div>
                <div className="projects-wrapper flex">
                    <div className="colA">
                        <div className="project_img_slider">
                            <Swiper 
                                loop={true}
                                autoplay={{ delay: 1000, disableOnInteraction: false,}}
                                direction="vertical"
                                slidesPerView ={1}
                                spaceBetween={50}
                                speed={1800}
                                modules={[Autoplay]}
                            >
                                {
                                    projectImages.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <figure>
                                                <Image src={item.imgSrc} width={641} height={427} alt="Project Image"></Image>
                                            </figure>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="colB">
                        <h3>We know what you need</h3>
                        <div className="desc">
                            <p>This project reimagines modern living with a focus on comfort, functionality, and timeless aesthetics. Every corner of the home has been carefully designed to balance personal expression with practical needs.</p>
                        </div>
                        <Link href="/projects" className="btn">Explore All Projects <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}