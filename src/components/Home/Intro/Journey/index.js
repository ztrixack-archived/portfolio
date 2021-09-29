/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { GiJourney } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Journey = () => {
  return (
    <div tw="mt-20 flex flex-wrap items-center flex-row-reverse">
      <div tw="w-full md:w-1/2 text-center sm:px-6" data-aos="fade-right">
        <h3 tw="text-3xl text-gray-900 font-semibold">My Journey</h3>
        <div tw="mt-6 mb-12 text-xl leading-9 text-gray-500">
          I am not fond of recording videos. I prefer to use the photo to tell my trip.
        </div>
        <Link to="/journey">
          <button tw="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
            Follow my lead!
          </button>
        </Link>
      </div>
      <div tw="w-full md:w-1/2 p-6" data-aos="fade-left">
        <GiJourney tw="text-green-500 mx-auto p-16" size="md" />
      </div>
    </div>
  )
}

export default Journey
