
import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
import CarouselSlider from "../../Components/Carousel/CarouselSlider"

function Landing() {
  return (
    <Layout>
      
        <CarouselSlider/>
        <Category/>
        <Product/>
    </Layout>
  )
}

export default Landing