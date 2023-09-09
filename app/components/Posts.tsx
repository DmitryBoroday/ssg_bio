import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import Link from "next/link"
import {IoIosArrowRoundBack} from 'react-icons/io'

export default function Posts() {
    const posts = getSortedPostsData()
  return (
        <>
          <h1 className='sm:mt-20 sm:mb-15 my-10'>
              <code className='text-green-300'>blog</code> Posts
          </h1>
             <Link href='/' className=''>
              <h2 className='text-orange-600 font-bold felx flex row items-center justify-start'><IoIosArrowRoundBack size={30} />Back</h2>
             </Link>
           <ul className='w-full'>
              {posts.map(post => (
                  <ListItem post={post} key={post.id} />
              ))}
           </ul>
        </> 
  )
}
