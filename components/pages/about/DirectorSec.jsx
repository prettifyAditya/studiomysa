import Image from "next/image";

export default function DirectorSec(){
    return(
        <div className="about-secC sec-pad-all bgprime">
            <div className="container">
                <div className="flex">
                    <figure>
                        <Image src="/assets/images/about/director.jpg" width={447} height={460} alt="Director Image"></Image>
                    </figure>
                    <figcaption>
                        <div className="icon">
                            <Image src="/assets/icon/quote.svg" alt="Quote Image" width={50} height={50}></Image>
                        </div>
                        <h3>Director Message</h3>
                        <div className="desc">
                            <p>In a world where everything is speeded up, the secret is to slow down and look closely and in depth. Studio MYSA cultivates relationships, and expresses them through its collections.</p>
                        </div>
                        <div className="designation">
                            <Image src="/assets/icon/name_here.svg" width={400} height={30} alt="Name Here"></Image>
                            <p>Name Here</p>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>
    )
}