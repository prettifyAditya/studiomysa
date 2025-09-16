"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import "@/styles/component/component.css"

gsap.registerPlugin(ScrollTrigger);

export default function InteriorExperience(){
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    useEffect(() => {
        const cards = cardsRef.current;

        // pin the image-wrapper
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + window.innerHeight * cards.length,
            pin: sectionRef.current,
        });

        cards.forEach((card, i) => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => "+=" + window.innerHeight,
            scrub: true,
            onEnter: () => {
            // add active to current
            card.classList.add("active");

            // remove active + add exit to previous
            if (i > 0) {
                cards[i - 1].classList.remove("active");
                cards[i - 1].classList.add("exit");
            }
            },
            onEnterBack: () => {
                card.classList.add("active");

                if (i > 0) {
                    cards[i - 1].classList.remove("exit");
                }
            },
            onLeave: () => {
                card.classList.remove("active");
            },
            onLeaveBack: () => {
            card.classList.remove("active");
            if (i > 0) {
                cards[i - 1].classList.add("active");
            }
            },
        });
        });
    }, []);
    return(
        <div className="home-secA bgprime" ref={sectionRef}>
            <div className="main_wrapper">
                <div className="heading">
                    <h2>Interior Experience</h2>    
                </div>
                <div className="image-wrapper">
                    {["interior1.jpg", "interior1.jpg", "interior1.jpg"].map((img, i) => (
                        <div
                            className="sticky-wrap"
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                        >
                            <div className="item-md interior-card">
                                <figure>
                                    <img src={`/assets/images/other/${img}`} alt="Interior Image" />
                                </figure>
                                <figcaption>
                                    <p>Hospitality</p>
                                </figcaption>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}