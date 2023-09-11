import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import image from '../../public/images/me_.jpg'

function Bio() {
  return (
      <div className='sm:fixed sm:left-10 sm:bottom-4 fixed bottom-1 left-1'>
        <div className='rounded-full flex flex-row justify-around gap-2  bg-gradient-to-r from-indigo-500 to-cyan-500 '>
         <Image
          className='rounded-full m-1 z-10'
          src={image}
          alt='me'
          width={70}
          height={70}
          priority={true}
          />
          <div className=' flex flex-col justify-center pr-4'>
              <h3 className='text-bold-xl'>Dmitry Boroday</h3>
              <hr className='text-white'/>
              <h4 className='text-bold'>Web Developer</h4>
          </div>
            <div className=' flex flex-col justify-center pr-4'>
                <a href='https://github.com/DmitryBoroday?tab=repositories' target='_blank'><FaGithub size={34} className='hover:text-gray-300 transition-all'/></a>
          </div>
      </div>
       
      </div>     
  )
}

export default Bio
