import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (

    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900 mt-10">
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
             العنوان الرئيسي
        </h2>

        <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
           إما يروح ابعد من الجدي وسهّيل
            ولا يصير اقرب .. من زرار ثوبي   
        </p>

        <div className="mt-4 md:mt-8">
            <Link
            href="#"
            className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
            اضغط هنا 
            </Link>
        </div>
        </div>
    </div>

    <Image
        alt=""
        src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    />
    </section>
   
  )
}

export default HeroSection