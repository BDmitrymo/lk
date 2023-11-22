import React from 'react';
import {Carousel} from 'antd';
import './CarouselBanner.scss';

export interface ICarouselBanner {
  banners: {
    name: string;
    url: string;
  }[],
  isAutoplay?: boolean;
}

export const CarouselBanner = ({banners, isAutoplay = true}: ICarouselBanner) => {
  return (
    <Carousel className="as__carousel-banner" autoplay={isAutoplay}>
      {banners?.map(({name, url}) => <img key={name} src={url} alt={name}/>)}
    </Carousel>
  );
};
