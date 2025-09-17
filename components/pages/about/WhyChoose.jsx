"use client"
import Image from "next/image"
import { useState } from "react"

export default function WhyChoose(){
    const [whyActive, setWhyActive] = useState("tab1")
    return(
        <div className="about-secB sec-pad-all bgprime">
            <div className="container">
                <div className="heading">
                    <h2>Why Choose <span>Studio Mysa</span></h2>
                </div>
                <div className="why_wrapper">
                    <ul className="tab-nav">
                        <li className={whyActive === "tab1" ? "active" : ""} onClick={() => setWhyActive("tab1")}>Designing Dreams, Building Trust</li>
                        <li className={whyActive === "tab2" ? "active" : ""} onClick={() => setWhyActive("tab2")}>Redefine Your Work Environment</li>
                        <li className={whyActive === "tab3" ? "active" : ""} onClick={() => setWhyActive("tab3")}>Adapt Your Workplace to Evolving Challenges</li>
                    </ul>
                    <div className="tab-nav-content">
                        <div className={`tabs ${whyActive === "tab1" ? "active" : ""}`}>
                            <div className="why-content flex">
                                <figure>
                                    <Image src="/assets/images/about/about-tab.jpg" width={600} height={424} alt="About Image"></Image>
                                </figure>
                                <figcaption>
                                    <h5>Designing Dreams, Building Trust</h5>
                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab veniam quo sapiente saepe tenetur magni illo, quisquam, aliquid maxime est vitae ducimus hic quos itaque officia vel nulla obcaecati, excepturi temporibus maiores dignissimos beatae! Similique, minus. Vitae, dolorum sequi?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab veniam quo sapiente saepe tenetur magni illo, quisquam, aliquid maxime est vitae ducimus hic quos itaque officia vel nulla obcaecati, excepturi temporibus maiores dignissimos beatae! Similique, minus. Vitae, dolorum sequi?</p>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${whyActive === "tab2" ? "active" : ""}`}>
                            <div className="why-content flex">
                                <figure>
                                    <Image src="/assets/images/about/about-tab.jpg" width={600} height={424} alt="About Image"></Image>
                                </figure>
                                <figcaption>
                                    <h5>Designing Dreams, Building Trust</h5>
                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab veniam quo sapiente saepe tenetur magni illo, quisquam, aliquid maxime est vitae ducimus hic quos itaque officia vel nulla obcaecati, excepturi temporibus maiores dignissimos beatae! Similique, minus. Vitae, dolorum sequi?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab veniam quo sapiente saepe tenetur magni illo, quisquam, aliquid maxime est vitae ducimus hic quos itaque officia vel nulla obcaecati, excepturi temporibus maiores dignissimos beatae! Similique, minus. Vitae, dolorum sequi?</p>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${whyActive === "tab3" ? "active" : ""}`}>
                            <div className="why-content flex">
                                <figure>
                                    <Image src="/assets/images/about/about-tab.jpg" width={600} height={424} alt="About Image"></Image>
                                </figure>
                                <figcaption>
                                    <h5>Designing Dreams, Building Trust</h5>
                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab veniam quo sapiente saepe tenetur magni illo, quisquam, aliquid maxime est vitae ducimus hic quos itaque officia vel nulla obcaecati, excepturi temporibus maiores dignissimos beatae! Similique, minus. Vitae, dolorum sequi?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab veniam quo sapiente saepe tenetur magni illo, quisquam, aliquid maxime est vitae ducimus hic quos itaque officia vel nulla obcaecati, excepturi temporibus maiores dignissimos beatae! Similique, minus. Vitae, dolorum sequi?</p>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}