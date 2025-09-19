import BlogCol from "@/components/molecules/BlogCol";

export default function BlogListing(){
    return(
        <section>
            <div className="blog-listing-secB bgprime">
                <div className="container">
                    <div className="common-grid blog-list-grid">
                        <BlogCol
                            linkHref="/blog-details"
                            imgSrc="/assets/images/other/testimonial.jpg"
                            date="07 May 2025"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                        />
                        <BlogCol
                            linkHref="/blog-details"
                            imgSrc="/assets/images/other/testimonial.jpg"
                            date="07 May 2025"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                        />
                        <BlogCol
                            linkHref="/blog-details"
                            imgSrc="/assets/images/other/testimonial.jpg"
                            date="07 May 2025"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                        />
                        <BlogCol
                            linkHref="/blog-details"
                            imgSrc="/assets/images/other/testimonial.jpg"
                            date="07 May 2025"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                        />
                        <BlogCol
                            linkHref="/blog-details"
                            imgSrc="/assets/images/other/testimonial.jpg"
                            date="07 May 2025"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                        />
                        <BlogCol
                            linkHref="/blog-details"
                            imgSrc="/assets/images/other/testimonial.jpg"
                            date="07 May 2025"
                            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, natus."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}