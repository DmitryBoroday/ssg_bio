import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()
  return (
    <article>
          <h1>
              <code className='text-green-300'>blog</code> Posts
          </h1>
          <ul className='w-full'>
              {posts.map(post => (
                  <ListItem post={post} key={post.id} />
              ))}
          </ul>
    </article>
  )
}
