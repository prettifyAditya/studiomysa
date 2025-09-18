"use client"
import "@/app/contact-us/contact.css"
import HeroBanner from "@/components/molecules/HeroBanner";
import ContactSec from "./ContactSec";
import { useRef } from "react";
import ContactForm from "./ContactForm";

export default function ContactUsPage(){
    const contactRef = useRef(null);
    const scrollToContact = () => {
        if(contactRef.current){
            const offset = 50;
            const top = contactRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <HeroBanner
                classname="contactus_banner"
                mediaSrc="/assets/video/contact-us/contact-us.mp4"
                posterImg="/assets/video/contact-us/contact-poster.png"
                title="Contact us"
                desc="We'd Love to Create Something Beautiful With You."
                scrollto={scrollToContact}
            />
            <ContactSec reference={contactRef} />
            <ContactForm />
            <div className="contact-secC">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28073.624316356927!2d77.06994478715731!3d28.413129700450764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23fa3cf17213%3A0xf4533d0aee13b674!2sPrettify%20Creative%20%7C%20Graphic%20Designer%20Gurgaon%20%7C%20Logo%20Designer%20in%20Gurgaon%20%7C%20Web%20Designer%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1758176481481!5m2!1sen!2sin" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    )
}