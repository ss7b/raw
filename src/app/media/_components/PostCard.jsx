import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PostCard() {
  return (
    <Link href="/media/1">
      <div className="card card-compact bg-base-100 md:w-96 shadow-xl rounded-t-none ">
      <figure>
        
          <Image
          className='w-full'
          src="/images/one.jpg"
          alt="horse" />
      </figure>
      <div className="card-body dark:bg-gray-900 bg-slate-100 dark:text-slate-100 rounded-b-lg">
          <h2 className="card-title text-center">المتنبي أنا الذي نظر الأعمى إلى أدبي</h2>
      </div>
      </div>
    </Link>
  )
}

export default PostCard