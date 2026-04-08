'use client'

import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

// const data = [
//   {
//     title: 'About',
//     link: '/video',
//   },
//   {
//     title: 'Projects',
//     link: '/',
//   },
//   {
//     title: 'Blog',
//     link: '/blog',
//   },
//   {
//     title: 'Contact',
//     link: '/',
//   },
// ]

export default function Navbar() {
  return (
    <div className='w-[94%] lg:w-2/3 mx-auto flex items-center justify-between pt-6'>
      <div className='flex items-center gap-4'>
        <img
          src='/images/alibaba.jpeg'
          alt='User Avatar'
          width={64}
          height={64}
          loading='eager'
          className='w-10 h-10 rounded-full object-cover'
        />
        <nav className='flex items-center gap-4'>
          <a
            href='/'
            target='_blank'
            className='hover:animate-spin'
          >
            <Linkedin />
          </a>
          <a
            href='https://github.com/DmitryBoroday'
            target='_blank'
            className='hover:animate-spin'
          >
            <Github />
          </a>
        </nav>
      </div>
    </div>
  )
}
