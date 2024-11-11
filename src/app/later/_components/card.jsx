import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card() {
  return (
    <Link href="/later/1">
      <div className="card card-compact bg-base-100 max-w-full md:w-96  shadow-xl rounded-t-none hover:shadow-slate-200 hover:shadow-md">
      <figure>
          <Image
          className='w-full'
          src="/images/later.jpg"
          alt="horse" />
      </figure>
      <div className="card-body dark:bg-gray-900 bg-slate-100 dark:text-slate-100 rounded-b-lg">
          <h2 className="card-title text-center"> رواية خيالية</h2>
      </div>
      </div>
    </Link>
  )
}

export default Card