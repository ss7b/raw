import Link from 'next/link'
import React from 'react'

function MobileMenu() {
  return (
    <div className="relative ">

  <div
    className="w-screen absolute  z-10  rounded-b-md   bg-white shadow-lg dark:bg-gray-900"
    role="menu"
  >
    <div className="p-2">
    <ul className="flex flex-col pr-3 gap-6 text-sm">
          <li>
            <Link
              className="text-gray-500 transition-none hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-sm pr-0 hover:pr-3 transition-none-all"
              href="/"
            >
              رئيسية
            </Link>
          </li>
        
          <li>
            <Link
              className="text-gray-500 transition-none hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-sm pr-0 hover:pr-3 transition-none-all "
              href="/media"
            >
              اعلام
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-500 transition-none hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-sm  pr-0 hover:pr-3 transition-none-all "
              href="/later"
            >
              قصايد
            </Link>
          </li>
        </ul>
    </div>
  </div>
</div>
  )
}

export default MobileMenu