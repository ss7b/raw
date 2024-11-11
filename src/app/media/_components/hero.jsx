import Link from 'next/link'
import React from 'react'

function Hero({bgImg}) {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${bgImg})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">ابيات المتنبي</h1>
      <p className="mb-5">
      جازَ الأُُلى ملكت كفاك قدرهمُ فعرفوا بك أنّ الكلب فوقهمُ
      </p>
      <Link href="/media/1" className="btn btn-primary">مشاهدة المقطع </Link>
    </div>
  </div>
</div>
  )
}

export default Hero