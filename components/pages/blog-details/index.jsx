import "@/app/blogs/blogs.css"
import BlogBanner from "./BlogBanner";
import BlogContent from "./BlogContent";

export default function BlogDetailsPage(){
    return(
        <main>
            <BlogBanner />
            <BlogContent />
        </main>
    )
}