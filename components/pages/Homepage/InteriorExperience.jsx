import Image from "next/image"
import "@/styles/component/component.css"

export default function InteriorExperience(){
    return(
        <div className="home-secA bgprime">
            <div className="main_wrapper">
                <div className="heading">
                    <h2>Interior Experience</h2>
                </div>
                <div className="image-wrapper">
                    <div className="item-md interior-card">
                        <figure>
                            <Image src="/assets/images/other/interior1.jpg" width={386} height={429} alt="Interior Image"></Image>
                        </figure>
                        <figcaption>
                            <p>Hospitality</p>
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}