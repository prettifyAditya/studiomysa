import "@/app/blogs/blogs.css"
import BlogListing from "./BlogListing"
export default function BlogsPage(){
    return(
        <main>
            <div className="blog-listing-secA sec-pad-all
             mt-hdrfxd bgprime">
                <div className="container">
                    <div className="content text-center">
                        <h1>Blogs</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <BlogListing />
        </main>
    )
}