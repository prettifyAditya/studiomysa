import Image from "next/image"
import "@/styles/component/component.css"
export default function TestimonialCol({imgSrc="", Name, Place}){
    return(
        <div className="item-md testimonial-col">
            <figure>
                <Image src={imgSrc} width={386} height={419} alt="Testimonial Image"></Image>
            </figure>
            <figcaption>
                <div className="content">
                    <h6>{Name}</h6>
                    <p>{Place}</p>
                </div>
                <button type="button" className="play-btn"></button>
            </figcaption>
        </div>
    )
}