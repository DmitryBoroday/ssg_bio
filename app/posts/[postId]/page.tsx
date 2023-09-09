import getFormattedDate from '@/lib/getDate'
import { getSortedPostsData, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import {IoIosArrowRoundBack} from 'react-icons/io'


export function generateStaticParams() {
    const posts = getSortedPostsData() // deduped !!

    return posts.map((post) => ({
        postId: post.id
    }))
}

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
    <article>
          <section className='w-full flex justify-center mx-auto'>
          <Image
              className='sm:w-96 w-full sm:mt-10 mt-0 rounded-md'
              src={coverImage}
              width={600}
              height={400}
              alt='Dmitry'
              priority={true}
          />
            </section>
            <Link href='/blog'>
              <h2 className='text-orange-600 font-bold felx flex row items-center justify-start'><IoIosArrowRoundBack size={30} />Blog</h2>
              </Link>
            <h2 className=''>{title}</h2>
            <p className=''>
              {pubDate}
            </p>
            
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
              
            
    </article>
  )
}