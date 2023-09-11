import { FaNodeJs } from 'react-icons/fa'
import {
    TbBrandNextjs,
    TbBrandTailwind,
    TbBrandTypescript,
    TbBrandRedux,
    TbBrandFirebase
} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {
    SiMdx,
    SiMysql,
    SiMongodb,
    SiTrpc
} from 'react-icons/si'
import { PiFileSql } from 'react-icons/pi'
import Link from 'next/link'

function Stack() {

    return (      
        <ul className='flex flex-col sm:flex-row gap-3 mt-6 mb-10'>
            <div className='flex flex-row justify-around sm:justify-between gap-2'>
             <a href='https://nodejs.org/en' target='_blank' className=' hover:text-gray-500 transition-all'><FaNodeJs size={38}/></a>
             <a href='https://www.typescriptlang.org/' target='_blank' className=' hover:text-gray-500 transition-all'><TbBrandTypescript size={40}/></a>
             <a href='https://nextjs.org/' target='_blank' className=' hover:text-gray-500 transition-all'><TbBrandNextjs size={40}/></a>
             <a href='https://tailwindcss.com/' target='_blank' className=' hover:text-gray-500 transition-all'><TbBrandTailwind size={40}/></a>
            </div>
            <div className='flex flex-row justify-around gap-2'>
              <a href='https://redux.js.org/' target='_blank' className=' hover:text-gray-500'><TbBrandRedux size={40}/></a>
              <a href='https://trpc.io/' target='_blank' className=' hover:text-gray-500'><SiTrpc size={40}/></a>       
              <a href='https://mdxjs.com/' target='_blank' className=' hover:text-gray-500'><SiMdx size={40}/></a>       
              <a href='https://www.sqlite.org/index.html' target='_blank' className=' hover:text-gray-500'><PiFileSql size={40} /></a>
            </div>
            <div className='flex flex-row justify-around gap-2'>
               <a href='https://www.mysql.com/' target='_blank' className=' hover:text-gray-500'><SiMysql size={40}/></a>       
               <a href='https://firebase.google.com/' target='_blank' className=' hover:text-gray-500'><TbBrandFirebase size={40}/></a>       
               <a href='https://www.mongodb.com/' target='_blank' className=' hover:text-gray-500'><SiMongodb size={40}/></a>       
               <a href='https://git-scm.com/' target='_blank' className=' hover:text-gray-500'><BsGit size={40}/></a> 
            </div>
               
             
      </ul>  
  )
}

export default Stack
