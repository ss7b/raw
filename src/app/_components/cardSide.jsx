import React from 'react'

function CardSide() {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-3 ">
        <figure>
            <img
            className='h-fit'
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
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