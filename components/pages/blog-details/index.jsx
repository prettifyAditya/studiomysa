"use client"
import "@/app/blogs/blogs.css"
import BlogBanner from "./BlogBanner";
import BlogContent from "./BlogContent";
import { useRef } from "react";
import MoreBlogs from "./MoreBlogs";

export default function BlogDetailsPage(){
    const contentRef = useRef(null)
    const scrollToBlogContent = () => {
        if(contentRef.current) {
            const offset = 50;
            const top = contentRef.current.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
    return(
        <main>
            <BlogBanner scrollto={scrollToBlogContent} />
            <BlogContent reference={contentRef} />
            <MoreBlogs />
        </main>
    )
}