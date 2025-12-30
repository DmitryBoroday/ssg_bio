'use client'

import { Content } from '@/app/components/Content'
import { motion, useScroll } from 'framer-motion'
import AnimatedBtn from './components/AnimatedBtn'

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
      <Content />
      <AnimatedBtn />
    </div>
  )
}

export default page
