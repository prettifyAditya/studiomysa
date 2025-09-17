"use client"
import ProjectCol from "@/components/molecules/ProjectCol";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsList({ reference }){
    const [projectsActive, setProjectsActive] = useState("tab1")
    return(
        <div className="projects-secA sec-pad-all bgprime" ref={reference}>
            <div className="container">
                <div className="projects_tabs tab-nav">
                    <li className={projectsActive === "tab1" ? "active" : ""} onClick={() => setProjectsActive("tab1")}>Residential</li>
                    <li className={projectsActive === "tab2" ? "active" : ""} onClick={() => setProjectsActive("tab2")}>Commercial</li>
                    <li className={projectsActive === "tab3" ? "active" : ""} onClick={() => setProjectsActive("tab3")}>Hospitality</li>
                </div>
                <div className="tab-nav-content">
                    <div className={`tabs ${projectsActive === "tab1" ? "active" : ""}`}>
                        <div className="projects_wrapper">
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </div>
                    </div>
                    <div className={`tabs ${projectsActive === "tab2" ? "active" : ""}`}>
                        <div className="projects_wrapper">
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </div>
                    </div>
                    <div className={`tabs ${projectsActive === "tab3" ? "active" : ""}`}>
                        <div className="projects_wrapper">
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                            <ProjectCol
                                imgSrc="/assets/images/other/projects1.jpg"
                                projectDesc="Luxury residence interior with a winter garden in Agalarov Estate"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}