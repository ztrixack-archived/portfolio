/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { GiSpellBook } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Diary = () => {
  return (
    <div tw="mt-20 flex flex-wrap items-center">
      <div tw="w-full md:w-1/2 text-center sm:px-6" data-aos="fade-left">
        <h3 tw="text-3xl text-gray-900 font-semibold">My Diary</h3>
        <div tw="mt-6 mb-12 text-xl leading-9 text-gray-500">
          Ok, this is my record of personal activities, articles, or coding. I will be glad if you get something from
          here.
        </div>
        <Link to="/diary">
          <button tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">Let's Start</button>
        </Link>
      </div>
      <div tw="w-full md:w-1/2 p-6" data-aos="fade-right">
        <GiSpellBook tw="text-blue-500 mx-auto p-16" size="md" />
      </div>
    </div>
  )
}

export default Diary
