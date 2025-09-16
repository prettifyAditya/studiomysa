"use client"
import Image from "next/image";
import Link from "next/link";
import "@/styles/footer/footer.css";
import Hamburger from "./Hamburger";
import Overlay from "./Overlay";
import EnquirePop from "./EnquirePop";
import { useModalStore } from "@/store/modalStore";

export default function Footer() {
  const openEnquire = useModalStore((state) => state.openEnquire)
  return (
    <>
      <footer>
        <div className="upper_section">
          <div className="main_wrap">
            <div className="flex">
              <div className="colA">
                <Link className="logo" href="/">
                  <Image
                    src="/logo.svg"
                    width={300}
                    height={55}
                    alt="Logo"
                  ></Image>
                </Link>
                <ul>
                  <li>
                    <Link href="">
                      6th Floor, Worldmark, Sector 65, Gurgaon Haryana - 122001
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+918128992552">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#F6ECE680"
                          d="M3.714 5.258C3.523 4 4.41 2.87 5.765 2.456a.99.99 0 0 1 1.214.598l.435 1.16a1 1 0 0 1-.26 1.088L5.86 6.487a.5.5 0 0 0-.152.47l.012.052l.031.13a7.3 7.3 0 0 0 .729 1.805a7.3 7.3 0 0 0 1.296 1.627l.04.036a.5.5 0 0 0 .482.103l1.673-.527a1 1 0 0 1 1.072.319l.792.961c.33.4.29.988-.089 1.341c-1.037.967-2.463 1.165-3.455.368a12.7 12.7 0 0 1-3.024-3.529a12.4 12.4 0 0 1-1.554-4.385m3.043 1.765l1.072-.984a2 2 0 0 0 .521-2.176l-.434-1.16A1.99 1.99 0 0 0 5.473 1.5c-1.683.515-3.034 2.024-2.748 3.909c.2 1.316.661 2.99 1.678 4.738a13.7 13.7 0 0 0 3.262 3.805c1.488 1.195 3.474.787 4.764-.415a1.98 1.98 0 0 0 .179-2.708l-.792-.962a2 2 0 0 0-2.144-.636l-1.389.437a6.6 6.6 0 0 1-.936-1.223a6.3 6.3 0 0 1-.59-1.421"
                        />
                      </svg>{" "}
                      +91 - 81289 92552
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:consult@studiomysa.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#F6ECE680"
                          d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
                        />
                      </svg>
                      consult@studiomysa.com
                    </Link>
                  </li>
                </ul>
                <div className="btn_wrap">
                  <button type="button" className="btn solid">
                    Enquire Now
                  </button>
                  <button type="button" className="btn">
                    Whatsapp
                  </button>
                </div>
              </div>
              <div className="colB">
                <ul>
                  <li>
                    <Link href="">Projects</Link>
                  </li>
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Clients</Link>
                  </li>
                  <li><Link href="">Privacy Policy</Link></li>
                </ul>
                <ul>
                  <li>
                    <Link href="">FAQ’s</Link>
                  </li>
                  <li>
                    <Link href="">Blogs</Link>
                  </li>
                  <li>
                    <Link href="">Services</Link>
                  </li>
                  <li><Link href="">Contact Us</Link></li>
                </ul>
              </div>
            </div>
              <div className="copywrite">
                  <p>© Studio MYSA. All rights reserved.</p>
                  <p className="credit">Made by passion <Link href="/"><Image src="/assets/icon/prettify-light.svg" width={60} height={24} alt="Prettify Creative Innovation Pvt. Ltd"></Image></Link></p>
              </div>
          </div>
        </div>
        <div className="footer-banner banner">
          <div className="bg">
              <video src="/assets/video/footer.mp4" poster="/assets/video/footer-poster.png" autoPlay muted loop playsInline></video>
              <div className="banner-wrapper">
                  <div className="heading">
                      <h1>Studio MYSA</h1>
                  </div>
              </div>
          </div>
        </div>
      </footer>
      <div className="sticky_action flex">
          <Link className="whatsapp" href="" target="_blank">
              <Image src="/assets/icon/whatsapp.svg" width="24" height="24" alt="Whatsapp"></Image>
          </Link>
          <button className="call_action" onClick={openEnquire}>
              <p>Request a call</p>
          </button>
      </div>
      <Overlay />
      <Hamburger />
      <EnquirePop />
    </>
  );
}
