import Link from 'next/link'
import React from 'react'

function Title({title,link}) {
  return (
    <div className='flex justify-between my-10'>
        <h2 className="text-2xl dark:text-white">{title}</h2>
       
      
        <div>
        
        <Link
            className="flex gap-1 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
            href={link}
          >
            <span className="text-sm font-medium">المزيد</span>

            <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
          </Link>
        </div>
    </div>
  )
}

export default Title