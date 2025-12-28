import Link from 'next/link'
import Stack from './Stack'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { RxVideo } from 'react-icons/rx'
import Form from './Form'
import Cv from './Cv'

export function LoremIpsum() {
  return (

    <article>
      <h2 className='indent-6 text-lg'>
        <code className='font-bold text-gray-200 text-xl'>
          Starting coding in 2019, I was building Web Apps for private clients using JavaScript technologies feeling myself pretty comfortable with React ecosystem and it seems like business likes it as well!
        </code>
      </h2>
      <div className='flex items-center justify-between'>
        <div></div>
        <Link href='/video'>
          <h2 className='text-blue-300 font-bold felx flex row items-center justify-end gap-1 hover:text-gray-400 transition-all'>React intro <RxVideo size={20} /></h2> </Link>
      </div>
      <h3 className='indent-6 text-lg'>
        <code className='font-bold text-gray-200 text-xl'>
          Following the latest trends as the world of web development is constantly evolving, we design, create, and optimize websites and applications in response to customers needs, technological advancements, and the demands of the growing industry, which is changing rapidly, dictating new trends that are very exciting and have a great future! So, the industry is growing, and we have a lot of work to do...
        </code>
      </h3>
      <p className='text-blue-300 font-bold pt-12 pb-4'>My Stack</p>
      <Stack />
      <h4 className='indent-6'>
        <code className='font-bold text-gray-200 text-xl'>
          As you can see from my core stack - it's pretty basic and I believe it's production ready! Of course, these are some of the most used technologies if we talk <span>
            <a href='https://www.mongodb.com/resources/languages/mern-stack' target='_blank'><code className='text-blue-300 font-bold'>MERN</code></a></span> stack, and we have much more out there... To put it briefly, I try not to overcomplicate things and stick close to the official documentation, following proven patterns!
        </code>
      </h4>
      <div className='flex items-center justify-between'>
        <div></div>
        <Link href='blog'>
          <p className='text-blue-300 font-bold felx flex row items-center justify-end mt-10 hover:text-gray-400 transition-all'>Blog<IoIosArrowRoundForward size={30} /></p>
        </Link>
      </div>
      <h6 className='indent-6'>
        <code className='text-xl text-gray-200 font-bold'>
          At the end of the day, we got a lot to wrap our heads around! Mobile-First approach with Accelerated Mobile Pages (AMP) powered by AI-Chatbots and Push Notifications or PWAs with Voice сontrol. The API-first approach, Serverless Architecture with Static Website Generators took place. With the help of TypeScript and new Meta-Framworks like NextJS, we have a lot of interesting jobs to do!
        </code>
      </h6>
      <p className='text-blue-300 font-bold felx flex row items-center justify-start pt-12 pb-2'>Message me</p>
      <Form />
      <Cv />
    </article>
  )
}
