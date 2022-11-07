import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import IconReact from '/public/img/react.svg';
import CardSmall from "./CardSmall";

const logos = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
]

export default function CarouseLogo() {
    SwiperCore.use([Autoplay]);
    const [size, setSize] = useState(1);

    const swiperRef = useRef();
    useEffect(() => {
        setSize((swiperRef.current.size / 180 < 1 ? 1 : swiperRef.current.size / 180))
    }, [swiperRef])


    return (
        <div className="flex items-center w-full h-[256px]">
            <Swiper
                slidesPerView={size}
                // loop={true}
                // spaceBetween={16}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                // autoplay={{ delay: 2500 }}
                // modules={Autoplay}
                className="flex items-center w-full h-full"
            >

                {logos.map((elem, index) =>
                    <SwiperSlide key={index} className="flex items-center mr-4">
                        <CardSmall IconSvg={IconReact} />
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}
//

