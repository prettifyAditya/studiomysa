import "@/styles/component/component.css"
import Link from "next/link"
export default function PrivacyPolicyPage(){
    return(
        <main>
            <section>
                <div className="privacy-secA mt-hdrfxd bgprime">
                    <div className="container">
                    <div className="website-content">
                        <h1>Privacy Policy</h1>
                        <p>
                        <b>Effective Date: 07 May 2025</b>
                        </p>
                        <p>
                        Studio Mysa is committed to protecting the privacy of its
                        customers and website users. This Privacy Policy explains how we
                        collect, use, and safeguard your information when you visit
                        <Link href="www.studiomysa.in"> www.studiomysa.in</Link>.
                        </p>
                        <h3>1. Information We Collect</h3>
                        <p>
                        We may collect the following types of information when you interact
                        with our website:
                        </p>
                        <ul>
                        <li>
                            <b>Personal Information:</b> Name, email address, phone number,
                            billing/shipping address, payment details.
                        </li>
                        <li>
                            <b>Non-Personal Information:</b> Browser type, IP address, device
                            information, and browsing data.
                        </li>
                        </ul>
                        <h3>2. How We Use Your Information</h3>
                        <p>We use the collected information for the following purposes:</p>
                        <ul>
                        <li>To process orders and deliver products.</li>
                        <li>To verify payment and prevent fraudulent activities.</li>
                        <li>To communicate order updates and promotions (if opted in).</li>
                        <li>To improve our website, products, and services.</li>
                        </ul>
                        <h3>3. Sharing of Information</h3>
                        <p>
                        We do not sell, rent, or trade customer information. However, we may
                        share your data with:
                        </p>
                        <ul>
                        <li>Payment gateway providers to process transactions.</li>
                        <li>Logistics and courier companies to deliver orders.</li>
                        <li>Legal authorities when required by Indian law.</li>
                        </ul>
                        <h3>4. Data Security</h3>
                        <p>
                        We use SSL encryption and secure servers to protect your personal and
                        payment data.
                        </p>
                        <h3>5. Cookies</h3>
                        <p>
                        Our website may use cookies to enhance user experience. You can
                        disable cookies in your browser settings.
                        </p>
                        <h3>6. Your Rights</h3>
                        <p>
                        You may request to access, update, or delete your personal data by
                        contacting us at{" "}
                        <Link href="mailto:studiomysa.info@gmail.com">studiomysa.info@gmail.com</Link>.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}