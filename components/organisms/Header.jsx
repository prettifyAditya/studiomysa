"use client"
import Image from "next/image";
import Link from "next/link";
import "../../styles/header/header.css"
import { useEffect, useState } from "react";
import { useModalStore } from "@/store/modalStore";

export default function Header(){
    const openHam = useModalStore((state) => state.openHam)
    const [headerFixed, setHeaderFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return(
        <header className={`${headerFixed ? "header-fixed" : ""}`}>
            <div className="header-wrapper">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/logo.svg" width={300} height={55} alt="Logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    <ul>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li>
                            <button type="button" className="ham-btn" onClick={openHam}>
                                <span></span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}