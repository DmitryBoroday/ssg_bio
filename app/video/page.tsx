import VideoPlayer from '../components/VideoPlayer'
import Link from 'next/link'
import {IoIosArrowRoundBack} from 'react-icons/io'

export default function Home() {
  return (
    <article>
      <h1 className='sm:mt-20 am:mb-15 my-10'>
          <code className='text-purple-600'>Hi, Everyone </code> my Short Bio
      </h1>
     
         <Link href='/' className='hover:text-gray-400 transition-all'>
              <h2 className='font-bold felx flex row items-center justify-start'><IoIosArrowRoundBack size={30} />Back</h2>
             </Link>            
      <VideoPlayer /> 
         <p className='indent-10'>
         An emphasis on responsive design, serverless architecture, optimized voice search, dark mode standardization, and increased focus on cybersecurity
        </p>
   
    </article>
  )
}