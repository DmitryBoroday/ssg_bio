'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, usePresence } from 'framer-motion'

import { FaGithub } from 'react-icons/fa'
import gsap from 'gsap'
import { IoIosClose } from 'react-icons/io'

function Box() {
  const ref = useRef(null)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      })
    }
  }, [isPresent, safeToRemove])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      className='fixed bottom-24 right-4 lg:right-[80px] w-[92%] lg:w-[320px] h-[600px] bg-gradient-to-r from-neutral-600 to-zinc-900 rounded-2xl z-50 flex flex-col justify-center items-center gap-4 p-2 text-center text-white'
      ref={ref}
    >
      <video
        className='h-full w-full filter brightness-125 object-cover rounded-xl'
        loop
        autoPlay
        // muted
        playsInline
        preload='auto'
        width='100%'
        height='100%'
        poster=''
        src={'video/bg.mp4'}
      />
    </motion.div>
  )
}

export default function AnimatedBtn() {
  const [show, setShow] = useState(false)
  return (
    <div className='w-full h-full'>
      {/* <div className='rounded-full flex flex-row justify-around gap-2  bg-gradient-to-r from-indigo-500 to-cyan-500'>
        <div className='w-16 h-16 p-1'>
          <video
            className='h-full w-full filter brightness-125 object-cover rounded-full'
            loop
            autoPlay
            muted
            playsInline
            preload='auto'
            width='100%'
            height='100%'
            poster='/videos/popularPoster.avif'
            src={'video/bg.mp4'}
          />
        </div>
        <div className=' flex flex-col justify-center pr-4 '>
          <h3 className='text-bold-xl'>Dmitry Boroday</h3>
          <hr className='text-white' />
          <h4 className='text-bold'>Web Developer</h4>
        </div>
        <div className=' flex flex-col justify-center pr-4'>
          <a
            href='https://github.com/DmitryBoroday?tab=repositories'
            target='_blank'
          >
            <FaGithub
              size={34}
              className='hover:text-black transition-all'
            />
          </a>
        </div>
      </div> */}
      <div className='text-2xl text-white fixed right-2 lg:right-8 bottom-6 w-16 h-16 rounded-full bg-gradient-to-r from-neutral-600 to-zinc-900 z-50 shadow-md'>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShow(!show)
          }}
          className='w-full h-full rounded-full shadow-zinc-800 shadow-sm lg:shadow-lg flex items-center justify-center'
        >
          {show ? (
            <IoIosClose size={32} />
          ) : (
            <div className='w-16 h-16 p-1'>
              <video
                className='h-full w-full filter brightness-125 object-cover rounded-full'
                loop
                autoPlay
                muted
                playsInline
                preload='auto'
                width='100%'
                height='100%'
                poster='/videos/popularPoster.avif'
                src={'video/bg.mp4'}
              />
            </div>
          )}
        </motion.button>
      </div>
      <AnimatePresence>{show ? <Box /> : null}</AnimatePresence>
    </div>
  )
}
