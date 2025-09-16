"use client"
import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import Link from "next/link";

export default function Hamburger() {
    const isOpen = useModalStore((state) => state.isHamOpen)
    const closeHam = useModalStore((state) => state.closeHam)
  return (
    <div className={`model ham-pop ${isOpen ? "is-open" : ""}`}>
      <button className="close" onClick={closeHam}>
        <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="model-body">
        <div className="icon">
          <Image src="/logo-dark.svg" width="200" height="50" className="svg" alt="icon" />
        </div>
        <ul className="nav-list">
            <li><Link href="">About Us</Link></li>
            <li><Link href="">Projects</Link></li>
            <li><Link href="">Services</Link></li>
            <li><Link href="">Contact Us</Link></li>
        </ul>
        <div className="bottom-list">
          <div className="social-icons">
            <Link href="https://x.com/UniformBucket" target="_blank" title="Twitter">
                <Image src="/assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://www.facebook.com/UniformBucket" target="_blank" title="Facebook">
                <Image src="/assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://www.instagram.com/uniformbucket_official/?utm_source=qr&igshid=MThlNWY1MzQwNA%3D%3D" target="_blank" title="Instagram">
                <Image src="/assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://in.linkedin.com/company/uniformbucket" target="_blank" title="Linkedin">
                <Image src="/assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=918285309609&text=Hello%20Team%20Uniform%20Bucket!%20I%20am%20interested%20in%20one%20of%20your%20Products.%20Please%20touch%20base%20with%20me." target="_blank" title="Whatsapp">
                <Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
