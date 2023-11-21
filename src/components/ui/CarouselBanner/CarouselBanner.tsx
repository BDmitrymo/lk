import React from 'react';
import {Carousel} from 'antd';
import './CarouselBanner.scss';

export const CarouselBanner = ({banners}: { banners: React.ReactNode[] }) => {
  const CarouselBannerItem = ({urlImg}: { urlImg: any }) => {
    return (
      <div className="as__carousel-banner_item">
        <img src={urlImg} alt={urlImg}/>
      </div>
    );
  };

  return (
    <Carousel className="as__carousel-banner" infinite={false} autoplay>
      {banners?.map((banner, index) => <CarouselBannerItem key={index} urlImg={banner}/>)}
    </Carousel>
  );
};