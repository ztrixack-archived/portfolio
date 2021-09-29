/** @jsxImportSource @emotion/react */
import { FaBriefcase, FaMapMarkedAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'twin.macro'
import messages from './messages'
import SocialLink from './SocialLink'

const Main = ({ photo = 'https://i.imgur.com/uTsbduss.jpg' }) => {
  return (
    <div tw="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      <div tw="p-4 md:p-12 text-center lg:text-left">
        <div
          tw="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{ 'background-image': `url('${photo}')` }}
        ></div>

        <h1 tw="text-3xl font-bold pt-8 lg:pt-0">{messages.name}</h1>
        <div tw="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
        <p tw="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
          <FaBriefcase tw="mr-2" />
          {messages.work}
        </p>
        <p tw="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          <FaMapMarkedAlt tw="mr-2" />
          {messages.location}
        </p>
        <p tw="pt-8 text-sm">{messages.description}</p>

        <div tw="pt-12 pb-8">
          <Link as="button" to={{ pathname: `${process.env.PUBLIC_URL}/cv-tanawat-short.pdf` }} target="_blank">
            <button tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get In Touch</button>
          </Link>
        </div>

        <div tw="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
          <SocialLink icon="facebook" to={messages.links.facebook} />
          <SocialLink icon="linkedin" to={messages.links.linkedin} />
          <SocialLink icon="github" to={messages.links.github} />
          <SocialLink icon="youtube" to={messages.links.youtube} />
          <SocialLink icon="instagram" to={messages.links.instagram} />
        </div>
      </div>
    </div>
  )
}

export default Main
