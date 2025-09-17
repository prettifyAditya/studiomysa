"use client"
import HeroBanner from "@/components/molecules/HeroBanner"
import "@/app/projects/projects.css"
import ProjectsSection from "../Homepage/ProjectsSection"
import ProjectsList from "./ProjectsList"
import { useRef } from "react"
export default function ProjectListingPage(){
    const projectsRef = useRef(null);
    const scrollToProjects = () => {
        if(projectsRef.current) {
            const offset = 50;
            const top = projectsRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <HeroBanner
                classname="project_listing_banner"
                mediaSrc="/assets/video/projects/projects.mp4"
                posterImg="/assets/video/projects/projects-poster.png"
                title="Projects"
                desc="Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs."
                scrollto={scrollToProjects}
            />
            <ProjectsList
                reference={projectsRef}
            />
        </main>
    )
}