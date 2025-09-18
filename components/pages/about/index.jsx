"use client"
import HeroBanner from "@/components/molecules/HeroBanner";
import "@/app/about-us/about.css"
import OurStory from "./OurStory";
import WhyChoose from "./WhyChoose";
import { useRef } from "react";
import DirectorSec from "./DirectorSec";
import TeamMember from "./TeamMember";

export default function AboutusPage(){
    const storyRef = useRef(null);
    const scrollToStory = () => {
        if(storyRef.current) {
            const offset = 50;
            const top = storyRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <HeroBanner
                classname="aboutus_banner"
                mediaSrc="/assets/video/about-us/about-us.mp4"
                posterImg="/assets/video/about-us/about-poster.png"
                title="Turning Visions INTO SPACES"
                desc="Only at Studio Mysa"
                scrollto={scrollToStory}
            />
            <OurStory reference={storyRef} />
            <WhyChoose />
            <DirectorSec />
            <TeamMember />
        </main>
    )
}