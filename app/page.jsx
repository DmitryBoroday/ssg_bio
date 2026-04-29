'use client'

import { motion, useScroll } from 'framer-motion'
// import AnimatedBtn from './components/AnimatedBtn'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Teachers from './components/Teachers'
import Form from './components/Form'
import Cv from './components/Cv'
import Blog from './components/Blog'

function page() {
  const { scrollYProgress } = useScroll()
  return (
    <main>
      <motion.div
        className='progress-bar z-50'
        style={{ scaleX: scrollYProgress }}
      />
      <div>
        <Hero />
        <About />
        <Teachers />
        <Projects />
        <Blog />
        <Form />
        <Cv />
      </div>
      {/* <AnimatedBtn /> */}
    </main>
  )
}

export default page
