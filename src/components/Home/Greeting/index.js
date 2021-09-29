/** @jsxImportSource @emotion/react */
import 'twin.macro'
import ArrowBounce from '../_utils/ArrowBounce'
import { TextAnimate, TextAnimateItem, TextAnimateList } from './style'

const Greeting = () => {
  return (
    <section tw="flex h-screen bg-black">
      <div tw="m-auto justify-between text-center">
        <h3 tw="text-4xl md:text-6xl text-white m-4 tracking-widest" data-aos="fade-down">
          <span tw="text-blue-500 hidden lg:inline">printf(</span>
          <span tw="text-yellow-500">'Hello World'</span>
          <span tw="text-blue-500 hidden lg:inline">)</span>
        </h3>
        <p tw="pl-8 my-2" data-aos="fade-up">
          <span tw="text-blue-500">const </span>
          <span tw="text-pink-500">this.site</span>
          <span tw="text-white"> = </span>
          <span tw="text-yellow-500">'my </span>
          <TextAnimate tw="text-yellow-500">
            <TextAnimateList>
              <TextAnimateItem>Diary</TextAnimateItem>
              <TextAnimateItem>Journey</TextAnimateItem>
              <TextAnimateItem>Story</TextAnimateItem>
              <TextAnimateItem>Mystery</TextAnimateItem>
            </TextAnimateList>
          </TextAnimate>
          <span tw="text-yellow-500"> '</span>
        </p>
      </div>
      <ArrowBounce />
    </section>
  )
}

export default Greeting
