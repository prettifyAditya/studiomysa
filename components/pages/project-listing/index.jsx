import HeroBanner from "@/components/molecules/HeroBanner"
import "@/app/projects/projects.css"
import ProjectsSection from "../Homepage/ProjectsSection"
import ProjectsList from "./ProjectsList"
export default function ProjectListingPage(){
    return(
        <main>
            <HeroBanner
                classname="project_listing_banner"
                mediaSrc="/assets/video/projects/projects.mp4"
                posterImg="/assets/video/projects/projects-poster.png"
                title="Projects"
                desc="Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs."
            />
            <ProjectsList />
        </main>
    )
}