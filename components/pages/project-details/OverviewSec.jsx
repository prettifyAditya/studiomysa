import Link from "next/link"

export default function OverviewSec({ reference }){
    return(
        <div className="projectD-secA sec-pad-all bgprime" ref={reference}>
            <div className="container">
                <div className="heading text-center">
                    <h2>overview</h2>
                </div>
                <div className="overview_wrap">
                    <div className="desc">
                        <p>We craft interiors that balance functionality with timeless elegance. From residential spaces to commercial environments, our designs reflect individuality, purpose, and comfort. Every detail—from color palettes to textures and lighting—is thoughtfully curated to create spaces that inspire and endure.</p>
                    </div>
                    <div className="pro-insights flex">
                        <div className="info">
                            <p>Project Size</p>
                            <span>1500 sq.ft.</span>
                        </div>
                        <div className="info">
                            <p>Location</p>
                            <span>Gurgaon</span>
                        </div>
                    </div>
                    <div className="btn_wrap">
                        <button type="button" className="btn solid">
                            Enquire Now
                        </button>
                        <Link href="" className="btn">
                            Whatsapp
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}