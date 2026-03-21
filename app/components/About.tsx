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

export default function About() {
    return (
        <article className='py-24 w-5/6 mx-auto'>
            <p className='text-4xl text-gray-200 font-bold mb-4 text-center'>About</p>
            <p className='text-center text-gray-400 mb-4 lg:mb-12'>Stack & My Story</p>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-12'>
                <div className='lg:w-1/2'>
                    <h3 className='text-gray-200 text-lg lg:text-xl font-bold lg:font-normal indent-8 text-center lg:text-start'>Hey everyone! I start coding in 2019 building web apps for private clients using JavaScript technologies... I comfortable with React ecosystem like <span>
                        <a href='https://www.mongodb.com/resources/languages/mern-stack' target='_blank'><span className='text-blue-300 font-bold hover:text-gray-400'>MERN</span></a></span> stack end proven patterns, that did well in production. Clean architecture and a well-chosen stack, suitable for each specific project is what makes me happy with a job! As you can see from my core stack - it's pretty basic end I try not to overcomplicate things end stick closer to official docs!</h3>
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
