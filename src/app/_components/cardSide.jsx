import Image from 'next/image'
import React from 'react'

function CardSide() {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-3 ">
        <figure>
            <Image
            className='h-fit'
        width={100} height={100}

            src="/images/re.jpg"
            alt="Movie" />
        </figure>
        <div className="card-body dark:bg-gray-800 ">
            <h2 className="card-title dark:text-white">Click the button to watch on Jetflix app.!</h2>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
    )
}

export default CardSide