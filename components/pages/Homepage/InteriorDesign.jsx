"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function InteriorDesign() {
  const sectionRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
    const slides = slidesRef.current;
    const totalSlides = slides.length;

    const factor = window.innerWidth < 768 ? 0.7 : 1; 

      // Pin the whole section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 7%",
        end: `+=${totalSlides * 100 * factor}%`, // section height * number of slides
        pin: true,
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          // Progress of whole section
          const progress = self.progress * (totalSlides - 1);
          const index = Math.round(progress);

          slides.forEach((el, i) => {
            if (el) el.classList.toggle("active", i === index);
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    } 
  }, []);

  return (
    <div className="home-secB sec-pad-all bgprime" ref={sectionRef}>
      <div className="main_wrapper">
        {[1, 2, 3].map((_, i) => (
          <div
            className={`design-slide ${i === 0 ? "active" : ""}`}
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
          >
            <div className="flex">
              <div className="colA">
                <figure>
                  <Image
                    src="/assets/images/home/aboutinterior.jpg"
                    width={700}
                    height={440}
                    alt="Interior Image"
                  />
                </figure>
              </div>
              <div className="colB">
                <h2>Interior design {i + 1}</h2>
                <div className="desc">
                  <p>
                    Transforming spaces with innovative designs tailored to
                    residential, commercial, and hospitality needs. We blend
                    functionality with aesthetics to create environments that
                    inspire.
                  </p>
                </div>
                <Link href="/service-details" className="btn">
                  Explore{" "}
                  <Image
                    src="/assets/icon/btn-icon.svg"
                    width={20}
                    height={20}
                    alt="Button Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
