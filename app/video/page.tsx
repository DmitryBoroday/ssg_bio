import VideoPlayer from '../components/VideoPlayer'
import Link from 'next/link'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function Home() {
  return (
    <article>
      <h1 className='sm:mt-20 am:mb-15 mt-5 mb-10'>
          <code className='text-indigo-300'>top industry guys </code> talking React )
      </h1>
        <div className=' flex items-center  justify-between h-10'>    
          <Link href='/'>
          <h2 className='font-bold hover:text-gray-500 transition-all flex flex-row items-center'><IoIosArrowRoundBack size={30} />back</h2></Link>  
          <div>
          </div>
        </div>               
      <VideoPlayer /> 
         <p className='indent-10'>
        I think that the idea of React framework was so good that it was immediately picked up by developers and businesses. Some people hate it, other loves this technology! But one thing is clear - React has paved its way in the history of Web Development and I hope we will see many more great products built on top of this ecosystem...
        </p>
   
    </article>
  )
}