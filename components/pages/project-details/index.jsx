"use client"
import HeroBanner from "@/components/molecules/HeroBanner";
import "@/app/projects/projects.css"
import FormSection from "@/components/molecules/FormSection";
import MoreProjects from "./MoreProjects";
import { useRef } from "react";
import OverviewSec from "./OverviewSec";
import ProjectGallery from "./ProjectGallery";
import LuxurySec from "./LuxurySec";

export default function ProjectDetailsPage(){
    const overviewRef = useRef(null);
    const scrollToOverview = () => {
        if(overviewRef.current) {
            const offset = 50;
            const top = overviewRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <HeroBanner
                classname="project_details_banner"
                mediaType="image"
                mediaSrc="/assets/images/other/project-details.jpg"
                title=""
                desc="Luxury residence interior with a winter garden in Grugaon Estate"
                scrollto={scrollToOverview}
            />
            <OverviewSec reference={overviewRef} />
            <ProjectGallery />
            <LuxurySec />
            <FormSection
                heading="creating interior with studio mysa"
            />
            <MoreProjects />
        </main>
    )
}