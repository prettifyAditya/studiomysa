import Image from "next/image";
import Link from "next/link";

export default function BlogListing(){
    return(
        <section>
            <div className="blog-listing-secB bgprime">
                <div className="container">
                    <div className="common-grid blog-list-grid">
                        <Link href="/blog-details" className="blog-col item-md">
                            <figure>
                                <Image
                                    src="/assets/images/other/testimonial.jpg"
                                    alt="Blog Image"
                                    width={413}
                                    height={348}
                                />
                            </figure>
                            <figcaption>
                                <p>07 May 2025</p>
                                <h6>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
                                natus.
                                </h6>
                            </figcaption>
                        </Link>
                        <Link href="/blog-details" className="blog-col item-md">
                            <figure>
                                <Image
                                    src="/assets/images/other/testimonial.jpg"
                                    alt="Blog Image"
                                    width={413}
                                    height={348}
                                />
                            </figure>
                            <figcaption>
                                <p>07 May 2025</p>
                                <h6>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
                                natus.
                                </h6>
                            </figcaption>
                        </Link>
                        <Link href="/blog-details" className="blog-col item-md">
                            <figure>
                                <Image
                                    src="/assets/images/other/testimonial.jpg"
                                    alt="Blog Image"
                                    width={413}
                                    height={348}
                                />
                            </figure>
                            <figcaption>
                                <p>07 May 2025</p>
                                <h6>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
                                natus.
                                </h6>
                            </figcaption>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}