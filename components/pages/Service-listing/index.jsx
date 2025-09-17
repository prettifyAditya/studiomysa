"use client"
import HeroBanner from "@/components/molecules/HeroBanner";
import "@/app/services/service.css"
import ServicesSection from "./ServicesSection";
import { useRef } from "react";

export default function ServiceListingPage(){
    const servicesRef = useRef(null);
    const scrollToService = () => {
        if(servicesRef.current) {
            const offset = 50;
            const top = servicesRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <HeroBanner
                classname="service_listing_banner"
                mediaSrc="/assets/video/services/service.mp4"
                posterImg="/assets/video/services/service-poster.png"
                title="services"
                desc="Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs."
                scrollto={scrollToService}
            />
            <ServicesSection reference={servicesRef} />
        </main>
    )
}