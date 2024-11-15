
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RandomCard() {
  return (
    <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 my-5">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      dateTime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
    >
      <span>2022</span>
      <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
      <span>Oct 10</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <Image

      alt=""
      src="/images/later.jpg"
      width={100} height={100}

      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div
      className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
    >
      <Link href="/later/1">
        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
          Finding the right guitar for your style - 5 tips
        </h3>
      </Link>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <Link
        href="#"
        className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
      >
        Read Blog
      </Link>
    </div>
  </div>
</article>
  )
}

export default RandomCard