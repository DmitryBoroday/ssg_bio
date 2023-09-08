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
        <ul className='flex flex-col sm:flex-row gap-2 mt-6 mb-10'>
            <div className='flex flex-row justify-around sm:justify-between gap-2'>
             <Link href='' className=' hover:text-gray-500 transition-all'><FaNodeJs size={38}/></Link>
             <Link href='' className=' hover:text-gray-500 transition-all'><TbBrandTypescript size={40}/></Link>
             <Link href='' className=' hover:text-gray-500 transition-all'><TbBrandNextjs size={40}/></Link>
             <Link href='' className=' hover:text-gray-500 transition-all'><TbBrandTailwind size={40}/></Link>
            </div>
            <div className='flex flex-row justify-around gap-2'>
              <Link href='' className=' hover:text-gray-500'><TbBrandRedux size={40}/></Link>
              <Link href='' className=' hover:text-gray-500'><SiTrpc size={40}/></Link>       
              <Link href='' className=' hover:text-gray-500'><SiMdx size={40}/></Link>       
              <Link href='' className=' hover:text-gray-500'><PiFileSql size={40} /></Link>
            </div>
            <div className='flex flex-row justify-around gap-2'>
               <Link href='' className=' hover:text-gray-500'><SiMysql size={40}/></Link>       
               <Link href='' className=' hover:text-gray-500'><TbBrandFirebase size={40}/></Link>       
               <Link href='' className=' hover:text-gray-500'><SiMongodb size={40}/></Link>       
               <Link href='' className=' hover:text-gray-500'><BsGit size={40}/></Link> 
            </div>
               
             
      </ul>  
  )
}

export default Stack
