/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { GiCryoChamber } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <div tw="mt-20 flex flex-wrap items-center">
      <div tw="w-full sm:w-1/2 text-center sm:px-6" data-aos="fade-left">
        <h3 tw="text-3xl text-gray-900 font-semibold">My Story</h3>
        <div tw="mt-6 mb-12 text-xl leading-9 text-gray-500">
          Do you wanna know me? Really?
          <br />
          Let's check it out!
        </div>
        <Link to="/story">
          <button tw="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded-full">Get in touch</button>
        </Link>
      </div>
      <div tw="w-full sm:w-1/2 p-6" data-aos="fade-right">
        <GiCryoChamber tw="text-pink-500 mx-auto p-16" size="md" />
      </div>
    </div>
  )
}

export default Story
