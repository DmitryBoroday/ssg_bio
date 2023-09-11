import VideoPlayer from '../components/VideoPlayer'
import Link from 'next/link'
import {IoIosArrowRoundBack} from 'react-icons/io'

export default function Home() {
  return (
    <article>
      <h1 className='sm:mt-20 am:mb-15 mt-5 mb-10'>
          <code className='text-indigo-300'>Hi, Everyone </code> my Short Bio
      </h1>
        <div className=' flex items-center  justify-between h-10'>    
          <Link href='/'>
          <h2 className='font-bold hover:text-gray-500 transition-all flex flex-row items-center'><IoIosArrowRoundBack size={30} />back</h2></Link>  
          <div>
          </div>
        </div>               
      <VideoPlayer /> 
         <p className='indent-10'>
         An emphasis on responsive design, serverless architecture, optimized voice search, dark mode standardization, and increased focus on cybersecurity An emphasis on responsive design, serverless architecture, optimized voice search, dark mode standardization, and increased focus on cybersecurity
        </p>
   
    </article>
  )
}