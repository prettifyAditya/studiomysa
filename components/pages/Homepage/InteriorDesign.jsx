import Image from "next/image"
import Link from "next/link"
export default function InteriorDesign(){
    return(
        <div className="home-secB sec-pad-all bgprime">
            <div className="main_wrapper">
                <div className="flex">
                    <div className="colA">
                        <figure>
                            <Image src="/assets/images/home/aboutinterior.jpg" width={700} height={440} alt="Interior Image"></Image>
                        </figure>
                    </div>
                    <div className="colB">
                        <h2>Interior design</h2>
                        <div className="desc">
                            <p>Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs. We blend functionality with aesthetics to create environments that inspire.</p>
                        </div>
                        <Link href="/" className="btn">Explore <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}