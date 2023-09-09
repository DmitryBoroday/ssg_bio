import Image from 'next/image'
import Link from 'next/link'
import getFormattedDate from '@/lib/getDate'
import {IoIosArrowRoundBack} from 'react-icons/io'

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date, coverImage } = post
    const formattedDate = getFormattedDate(date)
  return (
    <li className='flex flex-col justify-between md:flex-row md:items-center gap-5'>
          <div>
         
        <Link
          href={`/posts/${id}`}
          className='text-3xl no-underline hover:underline transition leading-tight'
        >{title}</Link>
        <p className='text-md m-0'>{formattedDate}</p>
      </div>     
        <Image
          className='mt-2 mb-10 sm:my-10 shadow-lg rounded-md'
          src={coverImage}
          alt='me'
          width={300}
          height={300}
          priority={true}
        />   
    </li>
  )
}
