import Image from "next/image"
import "@/styles/component/component.css"

export default function HeroBanner({ classname="", mediaType="video", mediaSrc="/assets/video/homepage/hero-video.mp4", posterImg="/assets/video/homepage/hero-video-poster.png", title, desc, scrollto }){
    return(
        <div className={`banner hero-banner ${classname}`}>
            <div className="bg"> 
                {
                    mediaType === "video" ? (
                        <video src={mediaSrc} poster={posterImg} autoPlay muted loop playsInline></video>
                    ) : (
                        <Image src={mediaSrc} alt="Banner Image" width="1272" height="700" />
                    )
                }
                <div className="banner-wrapper">
                    <div className="main_wrapper">
                        <div className="heading"> 
                            <h2>{title}</h2>
                            <p>{desc}</p>
                        </div>
                        <button type="button" className="scrollBtn" onClick={scrollto}>
                            <Image src="/assets/icon/scroll.svg" width={45} height={45} alt="Scroll down button"></Image>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}