import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center justify-between container mx-auto py-4 '>
        <section className='flex flex-col  p-3 gap-y-1'>
            <h1 className='text-lg font-medium '>Social Media</h1>
            <a href='https://www.instagram.com/' className='hover:text-zinc-400'>Instagram</a>
            <a href="https://x.com/" className='hover:text-zinc-400'>X | Twitter</a>
        </section>
        <section>
            <h1> Filtreler</h1>
        </section>
        <section>
            <h1>Yapimci</h1>
        </section>
    </div>
  )
}
