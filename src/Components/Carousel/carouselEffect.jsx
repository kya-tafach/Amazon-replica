import React from 'react'
import classes from './Carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { img } from './img/data';
function carouselEffect() {
  return (
    <div className={classes.carousel__container}>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        > 
        {img.map((imageItemLink) => {
            return <img key={imageItemLink} src={imageItemLink}  />;
          })}
        </Carousel>
      
    </div>
  )
}

export default carouselEffect
