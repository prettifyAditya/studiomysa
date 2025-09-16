import Image from "next/image";
import Link from "next/link";

export default function ServicesSection(){
    return(
        <div className="services-secA">
            <div className="container">
                <div className="flex sec-pad-all service-col">
                    <div className="colA">
                        <figure>
                            <Image src="/assets/images/other/service1.jpg" width={700} height={440} alt="Service Image"></Image>    
                        </figure>    
                    </div>    
                    <div className="colB">
                        <figcaption>
                            <h3>Interior design</h3>
                            <div className="desc">
                                <p>Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs. We blend functionality with aesthetics to create environments that inspire.</p>
                            </div>
                            <Link href="/" className="btn">Explore <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                        </figcaption>
                    </div>
                </div>    
                <div className="flex sec-pad-all service-col">
                    <div className="colA">
                        <figure>
                            <Image src="/assets/images/other/service1.jpg" width={700} height={440} alt="Service Image"></Image>    
                        </figure>    
                    </div>    
                    <div className="colB">
                        <figcaption>
                            <h3>Interior design</h3>
                            <div className="desc">
                                <p>Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs. We blend functionality with aesthetics to create environments that inspire.</p>
                            </div>
                            <Link href="/" className="btn">Explore <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                        </figcaption>
                    </div>
                </div>    
                <div className="flex sec-pad-all service-col">
                    <div className="colA">
                        <figure>
                            <Image src="/assets/images/other/service1.jpg" width={700} height={440} alt="Service Image"></Image>    
                        </figure>    
                    </div>    
                    <div className="colB">
                        <figcaption>
                            <h3>Interior design</h3>
                            <div className="desc">
                                <p>Transforming spaces with innovative designs tailored to residential, commercial, and hospitality needs. We blend functionality with aesthetics to create environments that inspire.</p>
                            </div>
                            <Link href="/" className="btn">Explore <Image src="/assets/icon/btn-icon.svg"width={20} height={20} alt="Button Icon"></Image></Link>
                        </figcaption>
                    </div>
                </div>    
            </div>            
        </div>
    )
}