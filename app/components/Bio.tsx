import Image from "next/image"
import Link from "next/link"
import {FaGithub} from 'react-icons/fa'

function Bio() {
    return (
        <div
            className='lg:fixed sm:left-10 lg:bottom-2 fixed bottom-1 px-auto bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex flex-row justify-center gap-2'
        >
        <Image
          className='rounded-full m-1 z-10'
          src='/me_.jpg'
          alt='me'
          width={100}
          height={100}
          priority={true}
          />
          <div className=' flex flex-col justify-center pr-4'>
              <h3 className='text-bold-xl'>Dmitry Boroday</h3>
              <hr className='text-white'/>
              <h4 className='text-bold'>Web Developer</h4>
          </div>
            <div className=' flex flex-col justify-center pr-4'>
                <Link href=''><FaGithub size={34} className='hover:text-gray-300 transition-all'/></Link>
          </div>
    </div>
  )
}

export default Bio
