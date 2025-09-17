import Image from "next/image"
import Link from "next/link"
import "@/styles/component/component.css"
export default function ProjectCol({ LinkHref="", imgSrc="", projectDesc="" }){
    return(
        <Link href={LinkHref} className="project-col">
            <figure>
                <Image src={imgSrc} width={577} height={362} alt="Projects Images"></Image>
            </figure>
            <figcaption>
                <p>{projectDesc}</p>
            </figcaption>
        </Link>
    )
}