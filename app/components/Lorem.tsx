import Link from 'next/link'
import Stack from './Stack'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { RxVideo } from 'react-icons/rx'
import Form from './Form'
import Cv from './Cv'

export function LoremIpsum() {
  return (

    <article>
      <h2 className='indent-10 text-lg'>
        <code className='font-bold text-gray-200'>
          Starting coding in 2019, I will build Web Applications for private clients using JavaScript technologies. Diving deeper as a self-employed developer, I build my own projects... I'm comfortable with the React ecosystem, and it seems like business likes it as well!
        </code>
      </h2>
      <div className='flex items-center justify-between'>
        <div></div>
        <Link href='/video'>
          <h2 className='text-blue-300 font-bold felx flex row items-center justify-end gap-1 hover:text-gray-400 transition-all'>React intro <RxVideo size={20} /></h2> </Link>
      </div>
      <h3 className='indent-10 text-lg'>
        <code className='font-bold text-gray-200'>
          Following the latest trends as the world of web development is constantly evolving, we design, create, and optimize websites and applications in response to customer's needs, technological advancements, and the demands of the growing industry which is changing rapidly, dictating new trends that are very exciting and have a great future! So, the industry is growing, and we have a lot of work to do...
        </code>
      </h3>
      <p className='text-blue-300 font-bold pt-12 pb-4'>My Stack</p>
      <Stack />
      <h4 className='indent-10'>
        As you can see from my stack I'm using the best of the full stack TypeScript ecosystem with <span><a href='https://nextjs.org/' className='text-gray-300 hover:text-gray-400' target='_blank'>NextJS </a></span> on top of <span><a href='https://legacy.reactjs.org/' className='text-gray-300 hover:text-gray-400' target='_blank'>React</a></span>. While developing I'm trying to stay closer to official docs as well as using MVC architectural pattern. Starting with in a <span><a href='https://www.mongodb.com/mern-stack' className='text-gray-300 hover:text-gray-400' target='_blank'>MERN</a></span> stack I feel comfortable with three layer architecture. I am also interested in Jamstack and Island approach with headless CMS integrations!
      </h4>
      <div className='flex items-center justify-between'>
        <div></div>
        <Link href='blog'>
          <p className='text-blue-300 font-bold felx flex row items-center justify-end mt-10 hover:text-gray-400 transition-all'>Blog<IoIosArrowRoundForward size={30} /></p>
        </Link>
      </div>
      <h6 className='indent-10'>
        At the end of the day we got a lot! Developers wraps their heads around the emergence of many new trends! We have Mobile-First approach with Accelerated Mobile Pages (AMP) powered by AI-Chatbots and Push Notifications! Our PWAs has more accessibility with Voice UI and they looks nice with Dark Mode and smooth Motion-UI.The API-first approach, Serverless Architecture with Static Website Generators tooks place. With help of TypeScript and new Meta-Framworks like NextJS we have a lot of interesting job to do ,guys!
      </h6>
      <p className='text-blue-300 font-bold felx flex row items-center justify-start pt-12 pb-2'>Message me</p>
      <Form />
      <Cv />
    </article>
  )
}
