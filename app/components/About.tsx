import { FaNodeJs, FaReact } from 'react-icons/fa'
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandTypescript,
    TbBrandRedux,
    TbBrandFirebase
} from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import {
    SiMdx,
    SiMongodb,
    SiExpress,
    SiSocketdotio,
} from 'react-icons/si'
import { RxVideo } from 'react-icons/rx'
import Link from 'next/link'

export default function About() {
    return (
        <article className='py-24 w-5/6 mx-auto'>
            <p className='text-4xl text-gray-200 font-bold mb-4'>About</p>
            <p className='text-gray-400 mb-4'>Stack & My Story</p>
            <div className='flex lg:flex-row flex-col justify-center lg:items-center gap-12'>
                <div className='lg:w-1/2'>
                    <h3 className='text-gray-200 text-lg lg:text-xl font-bold lg:font-normal lg:text-start'>I am Independent Software Engineer and Consultant with 6 years of experience delivering high-impact, full-stack solutions for businesses. I specialize in React and Node.js ecosystem <span>
                        <a href='https://www.mongodb.com/resources/languages/mern-stack' target='_blank'><span className='text-blue-300 font-bold hover:text-gray-400'>MERN</span></a></span> / <span>
                            <a href='https://nextjs.org/' target='_blank'><span className='text-blue-300 font-bold hover:text-gray-400'>Next.js</span></a>. </span>My approach prioritizes predictable, battle-tested design patterns, robust system architecture, and optimized data layers over unnecessary abstractions. I bridge the gap between complex technical execution and business objectives, ensuring applications are reliable, secure, and build to scale under heavy production loads.</h3>
                    <Link href='/video' className='py-2 px-4 bg-indigo-400 w-fit flex items-center justify-center gap-4 mt-8 rounded-md font-bold hover:bg-cyan-400 transition-all'>
                        Intro to React<RxVideo size={20} />
                    </Link>
                </div>
                <div className='lg:w-1/2 grid grid-cols-4 gap-12'>
                    <a href='https://www.mongodb.com/' target='_blank' className='hover:text-green-700'><SiMongodb size={44} /></a>
                    <a href='https://www.sqlite.org/index.html' target='_blank' className='hover:text-gray-300'><SiExpress size={44} /></a>
                    <a href='https://react.dev/' target='_blank' className='hover:text-teal-400'><FaReact size={44} /></a>
                    <a href='https://nodejs.org/en' target='_blank' className='hover:text-green-500'><FaNodeJs size={44} /></a>
                    <a href='https://git-scm.com/' target='_blank' className='hover:text-orange-600'><BsGit size={44} /></a>
                    <a href='https://nextjs.org/' target='_blank' className='hover:text-gray-600'><TbBrandNextjs size={44} /></a>
                    <a href='https://expressjs.com/' target='_blank' className='hover:text-sky-600'><TbBrandTypescript size={44} /></a>
                    <a href='https://redux.js.org/' target='_blank' className='hover:text-violet-600'><TbBrandRedux size={44} /></a>
                    <a href='https://mdxjs.com/' target='_blank' className='hover:text-yellow-500'><SiMdx size={44} /></a>
                    <a href='https://socket.io/' target='_blank' className='hover:text-emerald-300'><SiSocketdotio size={44} /></a>
                    <a href='https://tailwindcss.com/' target='_blank' className='hover:text-sky-400 transition-all'><TbBrandTailwind size={44} /></a>
                    <a href='https://firebase.google.com/' target='_blank' className=' hover:text-orange-500'><TbBrandFirebase size={44} /></a>
                </div>
            </div>
        </article>
    )
}
