import Image from "next/image"
import "@/styles/component/component.css"
import Link from "next/link"

export default function ServicesCol({ imgSrc="", serviceName="" }){
    return(
        <Link href="" className="item-md services-md">
            <figure>
                <Image src={imgSrc} width={580} height={370} alt="Services Image"></Image>
            </figure>
            <figcaption>
                <h6>{serviceName}</h6>
            </figcaption>
        </Link>
    )
}