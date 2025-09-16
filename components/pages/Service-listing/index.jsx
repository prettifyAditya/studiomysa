import HeroBanner from "@/components/molecules/HeroBanner";
import "@/app/services/service.css"
import ServicesSection from "./ServicesSection";

export default function ServiceListingPage(){
    return(
        <main>
            <HeroBanner
                classname="service_listing_banner"
                mediaSrc="/assets/video/services/service.mp4"
                posterImg="/assets/video/services/service-poster.png"
                title="services"
                desc="Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs."
            />
            <ServicesSection />
        </main>
    )
}