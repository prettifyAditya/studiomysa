"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger);


export default function InteriorDesign(){
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",   // when section hits center
          end: "bottom bottom",  // until section leaves center
          scrub: true,
          pin: true,            // set true if you want section fixed
          markers: false,   
        },
      });

      // image scaling + move left
      tl.fromTo(
        imgRef.current,
        { scale: .5, xPercent: +50 }, // start: bigger & centered
        { scale: 1, xPercent: 0, duration: 1, ease: "power3.out" }
      );

      // text slides in from right
      tl.fromTo(
        textRef.current,
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5" // overlap slightly with image
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
    return(
        <div className="home-secB sec-pad-all bgprime" ref={sectionRef}>
            <div className="main_wrapper">
                <div className="flex">
                    <div className="colA" ref={imgRef}>
                        <figure>
                            <Image src="/assets/images/home/aboutinterior.jpg" width={700} height={440} alt="Interior Image"></Image>
                        </figure>
                    </div>
                    <div className="colB" ref={textRef}>
                        <h2>Interior design</h2>
                        <div className="desc">
                            <p>Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs. We blend functionality with aesthetics to create environments that inspire.</p>
                        </div>
                        <Link href="/service-details" className="btn">Explore <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}