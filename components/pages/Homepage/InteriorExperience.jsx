"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const interiorData = [
  {
    imgSrc: "/assets/images/other/interior1.jpg",
    name: "Hospitality"
  }, 
  {
    imgSrc: "/assets/images/other/interior1.jpg",
    name: "Hospitality 2"
  }, 
  {
    imgSrc: "/assets/images/other/interior1.jpg",
    name: "Hospitality 3"
  }, 
]

export default function InteriorExperience({ reference }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = (cardsRef.current || []).filter(Boolean);
    if (!section || cards.length === 0) return;

    const pinTarget =  section;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * cards.length}`,
      pin: pinTarget,
      scrub: 2,
      onUpdate(self) {
        const progress = self.progress * (cards.length - 1);
        const currentIndex = Math.floor(progress);
        cards.forEach((card, i) => {
        card.classList.remove("active", "exit");

        if (i === currentIndex) {
          card.classList.add("active");
        } else if (i < currentIndex) {
          card.classList.add("exit");
        }
      });
      },
    });

    const handleResize = () => ScrollTrigger.refresh();
    const handleLoad = () => ScrollTrigger.refresh();

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    return () => {
      st.kill();
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="home-secA bgprime" ref={sectionRef}>
      <div className="main_wrapper">
        <div className="heading" ref={reference}>
          <h2>Interior Experience</h2>
        </div>
        <div className="image-wrapper">
          {interiorData.map((data, i) => (
            <div
              className="sticky-wrap"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <Link className="item-md interior-card" href="">
                <figure>
                  <img
                    src={data.imgSrc}
                    alt="Interior Image"
                  />
                </figure>
                <figcaption>
                  <p>{data.name}</p>
                </figcaption>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
