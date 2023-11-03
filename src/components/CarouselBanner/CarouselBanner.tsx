import React from "react"
import {Carousel} from "antd";
import "./CarouselBanner.scss"

export const CarouselBanner = ({banners}: { banners: React.ReactNode[] }) => {
  const CarouselBannerItem = ({urlImg}:{urlImg: any}) => {
    return (
      <div className="sb__carousel-banner_item">
        <img src={urlImg} alt={urlImg}/>
      </div>
    )
  }

  return (
    <Carousel className="sb__carousel-banner">
      {banners?.map((banner, index) => <CarouselBannerItem key={index} urlImg={banner}/>)}
    </Carousel>
  )
}