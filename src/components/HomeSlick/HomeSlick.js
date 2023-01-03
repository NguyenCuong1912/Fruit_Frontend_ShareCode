import Slider from "react-slick";
import React from 'react'
import { _banner1, _banner2, _banner3, _banner4, _banner5 } from './../../utils/Utils/imgPath';

export default function HomeSlick() {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img className="w-full" style={{ height: '653px' }} src={_banner1} alt='banner1' />
                </div>
                <div>
                    <img className="w-full" style={{ height: '653px' }} src={_banner2} alt='banner2' />
                </div>
                <div>
                    <img className="w-full" src={_banner3} alt='banner3' />
                </div>
                <div>
                    <img className="w-full" style={{ height: '653px' }} src={_banner4} alt='banner4' />
                </div>
                <div>
                    <img className="w-full" style={{ height: '653px' }} src={_banner5} alt='banner5' />
                </div>
            </Slider>
        </div>
    )
}
