import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Slect({slect }  ) {
    let box = [];
    for (let i = 0; i < 6; i++) {
        box.push(
            <Link
                className="block rounded-xl border bg-gray-900 border-gray-100 dark:border-gray-700 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 className="mt-2 font-bold text-white">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-slate-400">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </Link>
        )
        
    }
    if (slect == 1) {
        return (
            <section>
                    <h2 className="text-2xl dark:text-white">قسم اختياري</h2>


            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                    <Image
                        alt=""
                        src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                    <span
                    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                    ></span>

                    <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                        esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                        architecto eius quis quibusdam fugiat dicta.
                    </p>

                    <Link
                        href="#"
                        className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                        Get in Touch
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
        )
    }else{
        return (
            <section>
                <h2 className="text-2xl dark:text-white">قسم اختياري</h2>
        
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                    <h2 className="text-3xl font-bold sm:text-4xl text-white">Find your career path</h2>

                    <p className="mt-4 text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                    iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                    minima aliquid tempora. Obcaecati, autem.
                    </p>

                    <a
                    href="#"
                    className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                    Get Started Today
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {box}
                </div>
                </div>
            </div>
            </section>
        )
    }
  
}

export default Slect