'use client'

import { LoremIpsum } from '@/app/components/Lorem'
import {motion, useScroll} from 'framer-motion'


function page() {
   const {scrollYProgress} = useScroll()
  return (   
     <>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        />
         <h1 className='sm:mt-20 am:mb-15 my-10'>
          <code className='text-indigo-300'>Hello, I'm </code> Web Developer
         </h1>
        <LoremIpsum />
     </>
  )
}

export default page
