import React from 'react'
import HeroSection from '../_components/heroSection'
import PostCard from './_components/PostCard'
import Carousel from './_components/carousel'

function Media() {
  return (
    <div className='container mx-auto px-4 my-10'>
      <Carousel/>
      <h2 className="divider dark:text-white text-xl">مزيد من المقاطع</h2>
      <section className='grid grid-cols-1 lg:grid-cols-4 gap-y-5 md:gap-5 my-10 '>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </section>
    </div>
  )
}

export default Media