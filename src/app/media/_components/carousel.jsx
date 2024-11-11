import React from 'react'
import Hero from './hero'
import Link from 'next/link'

function Carousel() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <Hero bgImg="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"/>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide4" className="btn btn-circle">❮</Link>
      <Link href="#slide2" className="btn btn-circle">❯</Link>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <Hero bgImg="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"/>


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide1" className="btn btn-circle">❮</Link>
      <Link href="#slide3" className="btn btn-circle">❯</Link>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <Hero bgImg="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"/>


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide2" className="btn btn-circle">❮</Link>
      <Link href="#slide4" className="btn btn-circle">❯</Link>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <Hero bgImg="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"/>


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <Link href="#slide3" className="btn btn-circle">❮</Link>
      <Link href="#slide1" className="btn btn-circle">❯</Link>
    </div>
  </div>
</div>
  )
}

export default Carousel