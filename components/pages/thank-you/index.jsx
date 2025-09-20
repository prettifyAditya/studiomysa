import "@/styles/component/component.css"
import Link from "next/link"
export default function ThankyouPage(){
    return(
        <main>
            <div className="banner thank-you-banner">
                <div className="bg">
                    <video
                        src="/assets/video/projects/projects.mp4"
                        poster="/assets/video/projects/projects-poster.png"
                        playsInline
                        autoPlay
                        muted
                        loop
                        width="100%"
                        height="100%"
                    >
                    </video>
                    <div className="banner-wrapper">
                    <div className="container">
                        <div className="content">
                        <figure>
                            <img src="assets/icon/handshake.svg" alt="" />
                        </figure>
                        <h1>Thank You!</h1>
                        <p>We have received your details and our team will get back to you shortly.</p>
                        <Link href="/" className="btn solid">
                            Back to home
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}