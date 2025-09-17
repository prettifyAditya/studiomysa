"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      scrub: true,
      markers: false, // turn on for debugging
      onUpdate(self) {
        const progress = self.progress * (cards.length - 1);
        const currentIndex = Math.floor(progress);

        // baseline: clear everything
        cards.forEach((card) => {
          card.classList.remove("active", "exit");
        });

        // set current active
        if (cards[currentIndex]) {
          cards[currentIndex].classList.add("active");
        }

        // set all before current as exit
        for (let i = 0; i < currentIndex; i++) {
          cards[i].classList.add("exit");
        }
      },
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", ScrollTrigger.refresh);

    return () => {
      st.kill();
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", ScrollTrigger.refresh);
    };
  }, []);

  return (
    <div className="home-secA bgprime" ref={sectionRef}>
      <div className="main_wrapper">
        <div className="heading" ref={reference}>
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
                  <img
                    src={`/assets/images/other/${img}`}
                    alt="Interior Image"
                  />
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
  );
}
