"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import Image from "next/image"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess(){
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiperInstance = swiperRef.current.swiper;
        if (!swiperInstance) return;

        const slidesCount = swiperInstance.slides.length;
        let st = null; // keep reference so cleanup works

        // Run only on >=541px
        if (window.innerWidth >= 541) {
            st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 7%",
            end: () => "+=" + window.innerHeight * slidesCount,
            scrub: true,
            pin: true,
            onUpdate: (self) => {
                const progress = self.progress * (slidesCount - 1);
                swiperInstance.slideTo(Math.round(progress));
            },
            });
        }

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);

        return () => {
            if (st) st.kill(); // only kill if created
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((t) => t.kill()); // safe cleanup
        };
        }, []);

    return(
        <div className="home-secE sec-pad-all bgprime" ref={sectionRef}>
            <div className="main_wrapper">
                <div className="heading">
                    <h2>Our Process</h2>
                </div>
                <div className="process_wrapper">
                    <Swiper 
                        className="process-slider"
                        slidesPerView ={1}
                        spaceBetween={50}
                        speed={1800}
                        breakpoints={{
                            0: { 
                                direction: "horizontal",
                                slidesPerView: 1.2,
                                spaceBetween: 10
                            },   
                            541: { direction: "vertical" },  
                        }}
                        onSwiper={(swiper) => (swiperRef.current = { swiper })}
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