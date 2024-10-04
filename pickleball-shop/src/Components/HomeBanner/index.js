import Slider from "react-slick";
import React from 'react';

const HomeBanner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='homeBannerSection'>
            <Slider {...settings}>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_eda90b4582/main_strapi_web_eda90b4582.png" className='w-100' />
                </div>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_eda90b4582/main_strapi_web_eda90b4582.png" className='w-100' />
                </div>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_eda90b4582/main_strapi_web_eda90b4582.png" className='w-100' />
                </div>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_eda90b4582/main_strapi_web_eda90b4582.png" className='w-100' />
                </div>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/main_strapi_web_eda90b4582/main_strapi_web_eda90b4582.png" className='w-100' />
                </div>
            </Slider>
        </div>
    );
};

export default HomeBanner;