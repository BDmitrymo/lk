import React from "react"
import {Carousel} from "antd";
import "./CarouselBanner.scss"

export const CarouselBanner = ({children}: { children: React.ReactNode[] }) => {
  const CarouselBannerItem = ({urlImg}:{urlImg: any}) => {
    return (
      <div className="sb__carousel-banner_item">
        <img src={urlImg} alt={urlImg}/>
      </div>
    )
  }

  return (
    <Carousel className="sb__carousel-banner" autoplay>
      {children?.map((i, index) => <CarouselBannerItem key={index} urlImg={i}/>)}
    </Carousel>
  )
}