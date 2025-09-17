"use client"
import "@/app/services/service.css"
import HeroBanner from "@/components/molecules/HeroBanner";
import ServiceContent from "./ServiceContent";
import { useRef } from "react";
import MoreServices from "./MoreServices";
import FormSection from "@/components/molecules/FormSection";
export default function ServiceDetailsPage(){
    const contentRef = useRef(null);
    const scrollToServiceSection = () => {
        if(contentRef.current) {
            const offset = 50;
            const top = contentRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <HeroBanner
                classname="service_details_banner"
                mediaType="image"
                mediaSrc="/assets/images/other/service-details.jpg"
                title="Interior design"
                desc="Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs."
                scrollto={scrollToServiceSection}
            />
            <ServiceContent reference={contentRef} />
            <FormSection
                heading="creating interior with studio mysa"
            />
            <MoreServices />
        </main>
    )
}