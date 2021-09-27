/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import 'twin.macro'
import ArrowBounce from '../ArrowBounce'
import Wave from '../Wave'
import { Content, ContentItem, ContentList } from './style'

const Intro = () => {
  return (
    <section tw="flex h-screen bg-white cursor-none">
      <Wave />
      <div tw="max-w-xl lg:max-w-4xl m-auto pt-12 justify-between mix-blend-difference">
        <h3 tw="text-3xl my-8 text-pink-500">// What is this website ?</h3>
        <p tw="my-2">
          <span tw="text-gray-500"> getWebsite() {'{'}</span>
        </p>
        <p tw="pl-8 my-2">
          <span tw="text-gray-500">Website lazts = new Website()</span>
        </p>
        <p tw="pl-8 my-2">
          <span tw="text-gray-500">lazts.</span>
          <span tw="text-gray-500">description = </span>
          <span tw="text-blue-500">'This web site is my </span>
          <Content>
            <ContentList>
              <ContentItem>Story</ContentItem>
              <ContentItem>Article</ContentItem>
              <ContentItem>Travel</ContentItem>
              <ContentItem>Profile</ContentItem>
            </ContentList>
          </Content>
          <span tw="text-blue-500">.'</span>
        </p>
        <Link to="/blog">
          <p tw="pl-8 my-2 hover:underline text-green-500">
            <span tw="text-green-500">lazts.showBlog()</span>
          </p>
        </Link>
        <Link to="/profile">
          <p tw="pl-8 my-2 hover:underline text-green-500">
            <span tw="text-green-500">lazts.showProfile()</span>
          </p>
        </Link>
        <Link to="/about">
          <p tw="pl-8 my-2 hover:underline text-green-500">
            <span tw="text-green-500">lazts.showAbout()</span>
          </p>
        </Link>
        <p tw="pl-8 my-2">
          <span tw="text-gray-500">return lazts</span>
        </p>
        <p tw="my-2">
          <span tw="text-gray-500">{'}'}</span>
        </p>
      </div>
    </section>
  )
}

export default Intro
