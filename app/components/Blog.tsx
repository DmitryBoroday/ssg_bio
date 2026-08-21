import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'


export default function Blog() {
    return (
        <article className='py-24 w-5/6 mx-auto flex flex-col'>
            <p className='text-4xl text-gray-200 font-bold mb-4'>Blog</p>
            <p className='text-gray-400 mb-4'>Tech Talks</p>
            <h4 className='text-gray-200 text-lg lg:text-xl font-bold lg:font-normal lg:w-3/4'>
                The modern web environment requies a balance between rapid evolution and architectural stability. I focus on building reliable systems using type-safe frameworks like TypeScript, optimized Serverless/Edge infrastructures, and API-first architectures. Rather than chasing passing design trends, I invest in code maintainability, strict automated testing CI/CD, deep database indexing, and core web vitals. Software engineering is not just about making code work - it is about ensuring code remains performant, readable, and scalable years down the line.
            </h4>
            <Link href='/blog' className='py-2 px-4 bg-indigo-400 w-fit flex items-center justify-center gap-4 mt-8 rounded-md font-bold hover:bg-cyan-400 transition-all'>
                Blog Topics<FaLongArrowAltRight />
            </Link>
        </article>
    )
}
