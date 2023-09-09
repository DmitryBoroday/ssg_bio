import getFormattedDate from '@/lib/getDate'
import { getSortedPostsData, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import {IoIosArrowRoundBack} from 'react-icons/io'

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData() // deduped !!
    const { postId } = params
    
    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}


export default async function Post({ params }: { params: { postId: string } }) {
    
    const posts = getSortedPostsData() //deduped!
    const { postId } = params
    
    if (!posts.find(post => post.id === postId)) {
        return notFound
    }

    const { title, date, coverImage, contentHtml } = await getPostData(postId)
    const pubDate = getFormattedDate(date)

    return (
    <main className='px-6 prose prose-2xl mx-auto'>
          <section className='w-full mx-auto'>
          <Image
              className='shadow-xl shadow-black mx-auto mt-10 rounded-md'
              src={coverImage}
              width={600}
              height={400}
              alt='Dmitry'
              priority={true}
          />
          </section>
            <h1 className='drop-shadow-md text-3xl mt-4 mb-0'>{title}</h1>
            <p className='mt-o drop-shadow-md'>
              {pubDate}
          </p>
            <article>
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <Link href='blog' className='fixed top-5 left-5'>
              <h2 className='text-orange-600 font-bold felx flex row items-center justify-end'><IoIosArrowRoundBack size={30} />Blog</h2>
        </Link>
            </article>
    </main>
  )
}