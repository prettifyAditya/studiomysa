"use client"
import Image from "next/image";
import Link from "next/link";
import "../../styles/header/header.css"
import { useEffect, useState } from "react";
import { useModalStore } from "@/store/modalStore";
import { usePathname } from "next/navigation";

export default function Header(){
    const openHam = useModalStore((state) => state.openHam)
    const [headerFixed, setHeaderFixed] = useState(false);
    const pathname = usePathname()
    const isBlogsPage = pathname.startsWith('/blogs')
    const isPrivacyPolicyPage = pathname.startsWith('/privacy-policy')
    const isTermsConditionsPage = pathname.startsWith('/terms-conditions')
    const headerFill = isBlogsPage || isPrivacyPolicyPage || isTermsConditionsPage
    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return(
        <header className={`${headerFixed ? "header-fixed" : ""} ${headerFill ? "header-fit" : ""}`}>
            <div className="header-wrapper">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/logo.svg" width={300} height={55} alt="Logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    <ul>
                        <li><Link href="/projects">Portfolio</Link></li>
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