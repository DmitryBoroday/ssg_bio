import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';
import { RxVideo } from 'react-icons/rx';


export default function Hero() {
    return (
        <section className='heroBg'>
            <div className='flex lg:flex-row flex-col-reverse items-start lg:items-center py-24 lg:py-32 w-5/6 mx-auto'>
                <article className='w-full lg:w-2/3'>
                    <h1 className='text-5xl lg:text-7xl font-bold py-4'>
                        <span className='text-indigo-300 w-2/3'>Hi, I'm Dmitry,</span>
                        <br />
                        <span className='font-bold text-4xl lg:text-6xl'>
                            a Software Engineer
                        </span>
                    </h1>
                    <h2 className='text-lg font-bold text-gray-200'>I build full-stack production-ready performant web applications, with a focus on clean architecture end performance</h2>
                    <Link href='/video' className='py-2 px-4 bg-indigo-400 w-fit flex items-center justify-center gap-4 mt-8 rounded-md font-bold hover:bg-cyan-400 transition-all'>
                        Intro to React<RxVideo size={20} />
                    </Link>
                </article>
                <img
                    src='/images/me_.jpg'
                    alt='User Avatar'
                    width={64}
                    height={64}
                    loading='eager'
                    className='w-24 lg:w-96 h-24 lg:h-96 rounded-full object-cover'
                />
            </div>
            <nav className='absolute top-8 left-8 flex items-center gap-4 border-l-8 border-green-400 pl-2'>
                <a
                    href='https://www.linkedin.com/in/dmitry-boroday-88b8053b8/'
                    target='_blank'
                    className='hover:animate-spin'
                >
                    <CiLinkedin size={32} />
                </a>
                <a
                    href='https://github.com/DmitryBoroday'
                    target='_blank'
                    className='hover:animate-spin'
                >
                    <IoLogoGithub size={32} />
                </a>
            </nav>
        </section>
    )
}
