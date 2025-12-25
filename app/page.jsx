'use client'

import { LoremIpsum } from '@/app/components/Lorem'
import { motion, useScroll } from 'framer-motion'

function page() {
  const { scrollYProgress } = useScroll()
  return (
    <div>
      <motion.div
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className='pt-12 pb-6 px-4 text-center lg:w-1/2 mx-auto'>
        <code className='text-indigo-300'>Hello Everyone, I'm Dmitry,</code>
        <br />
        <span className='font-semibold text-gray-200'>
          a Full Stack Web Developer
        </span>
      </h1>
      <LoremIpsum />
    </div>
  )
}

export default page
