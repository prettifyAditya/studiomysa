import Image from "next/image"
import Link from "next/link"

export default function BlogCol({ linkHref ="", imgSrc="", date, content }){
    return(
        <Link href={linkHref} className="blog-col item-md">
            <figure>
                <Image
                    src={imgSrc}
                    alt="Blog Image"
                    width={413}
                    height={348}
                />
            </figure>
            <figcaption>
                <p>{date}</p>
                <h6>{content}</h6>
            </figcaption>
        </Link>
    )
}