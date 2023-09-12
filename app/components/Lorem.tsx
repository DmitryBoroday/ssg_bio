import Link from 'next/link'
import Stack from './Stack'
import { IoIosArrowRoundForward } from 'react-icons/io'
import {RxVideo} from 'react-icons/rx'
import Form from './Form'

export function LoremIpsum() {
  return (
    <>
      <article>
        <p className='indent-10'>
        Hi, everyone! My name is Dmitry and I build Web applications using JavaScript technologies. I started coding in 2019 and I continue to dive deeper till now. As a self-educated developer I create web applications for private clients and develop some of my own projects and startups. I comfortable with React ecosystem and it feels like business likes it as well!
        </p>
            
          <div className=' flex items-center   justify-between'>
          <div></div>
          <Link href='/video'>
            <h2 className='text-blue-300 font-bold felx flex row items-center justify-end gap-1 hover:text-gray-400 transition-all'>React intro <RxVideo size={20} /></h2> </Link>  
          </div>               
        <p className='indent-10'>
          Following the latest trends as the world of web development is constantly evolving - Web Developers are response to customers needs, technological advancements, and the demands of the industry. We  design, create, and optimize websites and applications in accordance with the latest industry demands.
        </p>
        <p className='indent-10'>
          So, the industry is growing and changing rapidly, dictating new trends that are very exciting and have a great future.
          Now we got some huge streaming trends like <span><a
            href='https://www.netflix.com/eg-en/' className='text-gray-300 hover:text-gray-400'
            target='_blank'
          >Netflix </a></span>,<span><a
            href='https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F' className='text-gray-300 hover:text-gray-400' target='_blank'>Hulu </a></span>, <span><a href='https://en.disneyme.com/' className='text-gray-300 hover:text-gray-400'
            target='_blank'>Disney </a></span>, <span><a href='https://tv.apple.com/' className='text-gray-300 hover:text-gray-400' target='_blank'>Apple TV </a></span> and <span><a href='https://www.youtube.com/' className='text-gray-300 hover:text-gray-400' target='_blank'>YouTube! </a></span> This guys are compete with the biggest social media platforms! We have a huge field of work with Voice Search Assistants, AI chatbots  and Motion UI integrations. We can enhance our PWAs with microservices or hydration as well as we can use some Island Architecture approach. Anyway, there is a lot of job to do!
        </p>
         <h2 className='text-blue-300 font-bold'>My Stack</h2>
        <Stack />      
        <p className='indent-10'>
         As you can see from my stack I'm using the best of the full stack TypeScript ecosystem with <span><a href='https://nextjs.org/' className='text-gray-300 hover:text-gray-400' target='_blank'>NextJS </a></span> on top of <span><a href='https://legacy.reactjs.org/' className='text-gray-300 hover:text-gray-400' target='_blank'>React</a></span>. While developing I'm trying to stay closer to official docs as well as using MVC architectural pattern. Starting with in a <span><a href='https://www.mongodb.com/mern-stack' className='text-gray-300 hover:text-gray-400' target='_blank'>MERN</a></span> stack I feel comfortable with three layer architecture. I am also interested in Jamstack and Island approach with headless CMS integrations!
        </p>
        <div className=' flex items-center   justify-between'>
          <div></div>
          <Link href='blog'>
          <h2 className='text-blue-300 font-bold felx flex row items-center justify-end mt-10 hover:text-gray-400 transition-all'>Blog<IoIosArrowRoundForward size={30} /></h2>
          </Link>
        </div>
       
        
        <p className='indent-10'>
         At the and of the day it's all about programming, concentration and hard work!
        </p>
        <h2 className='text-blue-300 font-bold felx flex row items-center justify-start'>Message me</h2>
        <Form />
      </article>
    </>
  );
}
