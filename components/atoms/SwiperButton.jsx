import Image from "next/image"

export default function SwiperButton({classname=""}){
    return(
        <button type="button" className={classname}><Image src="/assets/icon/swiper-prev.svg" width={30} height={30} alt="Swiper Button" /></button>
    )
}