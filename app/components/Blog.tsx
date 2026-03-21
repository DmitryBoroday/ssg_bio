import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'


export default function Blog() {
    return (
        <article className='py-24 w-5/6 mx-auto flex flex-col items-center'>
            <p className='text-4xl text-gray-200 font-bold mb-4 text-center'>Blog</p>
            <p className='text-center text-gray-400 mb-4 lg:mb-12'>Tech Talks</p>
            <h4 className='indent-8 text-gray-200 text-lg lg:text-xl font-bold lg:font-normal text-center'>
                Following the latest trends as the world of web development is constantly evolving, we design, create, and optimize websites and applications in response to customers needs, technological advancements, and the demands of the growing industry, which is changing rapidly, dictating new trends that are very exciting and have a great future! So, the industry is growing, and we have a lot of work to do... At the end of the day, we got a lot to wrap our heads around! Mobile-First approach with Accelerated Mobile Pages (AMP) powered by AI-Chatbots and Push Notifications or PWAs with Voice сontrol. The API-first approach, Serverless Architecture with Static Website Generators took place. With the help of TypeScript and new Meta-Framworks like NextJS, we have a lot of interesting jobs to do!
            </h4>
            <Link href='/blog' className='py-2 px-4 bg-indigo-400 w-fit flex items-center justify-center gap-4 mt-8 rounded-md font-bold hover:bg-cyan-400 transition-all'>
                Blog Topics<FaLongArrowAltRight />
            </Link>
        </article>
    )
}
