import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card() {
  return (
    <article
    className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
    >
    <Image
        className='w-full'
        src="/images/mm.jpeg"       
        class="h-56 w-full object-cover"
        width={50} height={50}
    />

    <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
        <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-gray-400">
        10th Oct 2022
        </time>

        <Link href="#">
        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
            How to position your furniture for positivity
        </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
        dignissimos. Molestias explicabo corporis voluptatem?
        </p>
    </div>
    </article>
  )
}

export default Card