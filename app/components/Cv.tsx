import {IoIosArrowRoundDown} from 'react-icons/io'

export default function Cv() {
  return (
    <a href='/files/cv.pdf' download>
      <h2 className='text-blue-300 font-bold felx flex row items-center justify-end mt-10 hover:text-gray-400 transition-all'><IoIosArrowRoundDown size={26} />CV</h2>
    </a>
  )
}
