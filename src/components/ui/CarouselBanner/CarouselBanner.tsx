import React from 'react';
import {Carousel} from 'antd';
import './CarouselBanner.scss';

export const CarouselBanner = ({banners}: { banners: React.ReactNode[] }) => {
  const CarouselBannerItem = ({urlImg}: { urlImg: any }) => {
    return <img className="as__carousel-banner_img" src={urlImg} alt={urlImg}/>
  };

  return (
    <Carousel className="as__carousel-banner" autoplay>
      {banners?.map((banner, index) => <CarouselBannerItem key={index} urlImg={banner}/>)}
    </Carousel>
  );
};