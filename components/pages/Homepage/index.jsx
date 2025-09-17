"use client"
import Herosection from "./Herosection";
import InteriorExperience from "./InteriorExperience";
import "../../../styles/home/home.css"
import Link from "next/link";
import Image from "next/image";
import ProjectsSection from "./ProjectsSection";
import OurProcess from "./OurProcess";
import Testimonials from "./Testimonials";
import InteriorDesign from "./InteriorDesign";
import { useRef } from "react";

export default function Homepage(){
    const interiorRef = useRef(null);
    const scrollToInteriorExp = () => {
        if(interiorRef.current) {
            const offset = 100;
            const top = interiorRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <Herosection
                scrollto={scrollToInteriorExp}
            />
            <InteriorExperience reference={interiorRef} />
            <InteriorDesign />
            <div className="home-secC banner">
                <div className="bg">
                    <video src="/assets/video/homepage/about-mysa.mp4" poster="/assets/video/homepage/about-mysa-poster.png" autoPlay muted loop playsInline></video>
                    <div className="banner-wrapper main_wrapper">
                        <div className="heading">
                            <h2>Studio MYSA</h2>
                            <p>At Studio MYSA, we believe that every space tells a story. Our passion lies in transforming ordinary rooms into extraordinary experiences—where functionality meets elegance, and design meets comfort.</p>
                        </div>
                        <Link href="/" className="btn">ABOUT STUDIO MYSA <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                    </div>
                </div>
            </div>
            <ProjectsSection />
            <OurProcess />
            <Testimonials />
        </main>
    )
}