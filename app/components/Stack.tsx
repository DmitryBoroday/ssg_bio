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
    SiMysql,
    SiMongodb,
    SiTrpc,
    SiExpress,
    SiSocketdotio,
    SiPostgresql
} from 'react-icons/si'
import { PiFileSql } from 'react-icons/pi'

function Stack() {

    return (
        <ul className='flex flex-col sm:flex-row gap-3 pb-4'>
            <div className='flex flex-row justify-around sm:justify-between gap-2'>
                <a href='https://www.mongodb.com/' target='_blank' className=' hover:text-green-700 hover:animate-bounce'><SiMongodb size={40} /></a>
                <a href='https://www.sqlite.org/index.html' target='_blank' className='hover:animate-pulse hover:text-black hover:bg-gray-200'><SiExpress size={40} /></a>
                <a href='https://react.dev/' target='_blank' className='hover:animate-spin hover:text-teal-400'><FaReact size={40} /></a>
                <a href='https://nodejs.org/en' target='_blank' className=' hover:text-green-500 hover:animate-ping'><FaNodeJs size={38} /></a>
            </div>
            <div className='flex flex-row justify-around gap-2'>
                <a href='https://git-scm.com/' target='_blank' className=' hover:text-orange-600'><BsGit size={40} /></a>

                <a href='https://nextjs.org/' target='_blank' className=' hover:text-gray-600 hover:animate-bounce'><TbBrandNextjs size={40} /></a>
                <a href='https://expressjs.com/' target='_blank' className='hover:text-sky-600'><TbBrandTypescript size={40} /></a>
                <a href='https://redux.js.org/' target='_blank' className=' hover:text-violet-600'><TbBrandRedux size={40} /></a>
            </div>
            <div className='flex flex-row justify-around gap-2'>
                <a href='https://mdxjs.com/' target='_blank' className=' hover:text-yellow-500'><SiMdx size={40} /></a>
                <a href='https://socket.io/' target='_blank' className=' hover:text-emerald-300'><SiSocketdotio size={36} /></a>
                <a href='https://tailwindcss.com/' target='_blank' className=' hover:text-sky-400 transition-all'><TbBrandTailwind size={40} /></a>
                <a href='https://firebase.google.com/' target='_blank' className=' hover:text-gray-500'><TbBrandFirebase size={40} /></a>
            </div>
        </ul>
    )
}

export default Stack
