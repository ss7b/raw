import React from 'react'
import PostCard from '../_components/PostCard'
import CardSide from '@/app/_components/cardSide'

function MediaId() {
  return (
    <div className='container mx-auto px-4 my-20'>
        <div className='flex gap-3 flex-col md:flex-row'>
            <div className="card card-compact bg-gray-900 shadow-xl md:flex-1 md:w-2/3 ">
                <figure>
                <iframe className='object-cover w-screen h-screen' src="https://www.youtube.com/embed/9c1IrQwfYFM?si=xMnNh2ieZ54Ydtyx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </figure>
                <div className="card-body max-h-fit">
                    <h2 className="card-title text-white font-thin"> القصيدة المقصورة للمتنبي | إلقاء: أسامة الواعظ</h2>
                </div>
            </div>
            <div className='flex flex-col  bg-gray-900 md:flex-none md:w-1/3 px-2 rounded-sm'>
                <h2 className=" dark:text-white text-lg my-3"> مقاطع مقترحة </h2>

                <CardSide/>
                <CardSide/>
                <CardSide/>
            </div>
        </div>
    </div>
  )
}

export default MediaId