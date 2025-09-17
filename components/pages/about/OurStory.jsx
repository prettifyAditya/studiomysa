"use client"
import Image from "next/image";
import { useEffect } from "react";

function animateCount(el, to) {
    const duration = 1000;
    const start = 0;
    const end = parseInt(to);
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }

export default function OurStory({ reference }){
     useEffect(() => {
        const elements = document.querySelectorAll('[data-count]');
        const options = {
          threshold: 0.5
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const el = entry.target;
    
            if (entry.isIntersecting) {
              const countTo = el.getAttribute('data-count');
              animateCount(el, countTo);
              observer.unobserve(el); // Only animate once
            } else {
              el.textContent = '0';
            }
          });
        }, options);
    
        elements.forEach(el => observer.observe(el));
    
        return () => observer.disconnect(); // Clean up on unmount
      }, []);
    return(
        <div className="about-secA sec-pad-all bgprime" ref={reference}>
            <div className="container">
                <div className="flex">
                    <div className="colA">
                        <figure>
                            <Image src="/assets/images/about/about-img.jpg" alt="Our Story Image" width={600} height={471}></Image>
                        </figure>
                    </div>
                    <div className="colB">
                        <figcaption>
                            <h2>Our Story</h2>
                            <div className="desc">
                                <p>Lorem ipsum dolor sit amet consectetur. Eget nibh hendrerit diam placerat et sed malesuada. Blandit in sed amet mattis. Arcu nisi dignissim morbi pharetra sodales.Lorem ipsum dolor sit amet consectetur. Eget nibh hendrerit diam placerat et sed malesuada. Blandit in sed amet mattis. Arcu nisi dignissim morbi pharetra sodales.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Eget nibh hendrerit diam placerat et sed malesuada. Blandit in sed amet mattis. Arcu nisi dignissim morbi pharetra sodales.Lorem ipsum dolor sit amet consectetur. Eget nibh hendrerit diam placerat et sed malesuada. Blandit in sed amet mattis. Arcu nisi dignissim morbi pharetra sodales.</p>
                            </div>
                            <div className="counter-wrapper">
                                <div className="counter-info-wrap">
                                    <h5><span>2008</span></h5>
                                    <p>Established</p>
                                </div>
                                <div className="counter-info-wrap">
                                    <h5><span data-count="250">0</span>+</h5>
                                    <p>Projects Completed</p>
                                </div>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}