import Image from "next/image";
import Link from "next/link";

export default function ContactSec({ reference }){
    return(
        <div className="contact-secA sec-pad-all bgprime" ref={reference}>
            <div className="container">
                <div className="flex">
                    <div className="contact-col">
                        <div className="icon">
                            <Image src="/assets/icon/location.svg" width={50} height={50} alt="Location Icon"></Image>
                        </div>
                        <p className="title">Address</p>
                        <Link href="">6th Floor, Worldmark, Sector 65, Gurgaon  Haryana - 122001</Link>
                    </div>
                    <div className="contact-col">
                        <div className="icon">
                            <Image src="/assets/icon/call.svg" width={50} height={50} alt="Call Icon"></Image>
                        </div>
                        <p className="title">Call Us</p>
                        <Link href="tel:+918128992552">+91 - 81289 92552</Link>
                        <Link href="" className="whtspp">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                            Whatsapp
                        </Link>
                    </div>
                    <div className="contact-col">
                        <div className="icon">
                            <Image src="/assets/icon/mail.svg" width={50} height={50} alt="Mail Icon"></Image>
                        </div>
                        <p className="title">Write Us</p>
                        <Link href="mailto:consult@studiomysa.com">consult@studiomysa.com</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}