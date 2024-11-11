import React from 'react'
import Card from './_components/card'


function Leter() {
  return (
    <div className='container mx-auto px-4 my-10'>
      <h2 className="divider dark:text-white text-xl">مزيد من المقاطع</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 '>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  )
}

export default Leter