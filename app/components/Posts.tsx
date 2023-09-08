import { getSortedPostsData } from "@/lib/posts"

export default function Posts() {
    const posts = getSortedPostsData()
  return (
    <section>
          <h1>Posts Page</h1>
          <ul className='w-full'>
              {posts.map(post => (
                  JSON.stringify(post)
              ))}
          </ul>
    </section>
  )
}
