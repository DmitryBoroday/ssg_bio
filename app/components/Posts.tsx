import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import Link from "next/link"
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section>
      <Link href='/' className='hover:bg-zinc-800 transition-all flex items-center mt-12 lg:mt-20 w-fit rounded-lg pr-2'>
        <IoIosArrowRoundBack size={30} />
        <p className='text-3xl font-bold'>
          <span className='text-indigo-300'>blog </span>Posts
        </p>
      </Link>
      <ul className='w-full mt-10'>
        {posts.map(post => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  )
}
