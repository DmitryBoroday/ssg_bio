import VideoPlayer from '../components/VideoPlayer'
import Link from 'next/link'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function ReactVideo() {
  return (
    <article className='w-5/6 lg:w-2/3 mx-auto'>
      <Link href='/' className='hover:bg-zinc-800 transition-all flex items-center mt-12 w-fit rounded-lg pr-2'>
        <IoIosArrowRoundBack size={30} />
        <p className='text-3xl font-bold'>
          <span className='text-indigo-300'>React </span>talks
        </p>
      </Link>
      <VideoPlayer />
      <p className='indent-8 text-gray-200 text-xl font-bold lg:font-normal pb-12 lg:pb-20'>
        I think that the idea of React framework was so good that it was immediately picked up by developers and businesses. Some people hate it, other loves this technology! But one thing is clear - React has paved its way in the history of Web Development and I hope we will see many more great products built on top of this ecosystem...
      </p>
    </article>
  )
}