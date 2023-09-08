'use client'

import { LoremIpsum } from '@/app/components/LoremIpsum'
import {motion, useScroll} from 'framer-motion'


function page() {
   const {scrollYProgress} = useScroll()
  return (
    <>
       <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code className='text-purple-600'>Hello, I'm </code> Web Developer
      </h1>
      <LoremIpsum />
    </>
    </>
  )
}

export default page
