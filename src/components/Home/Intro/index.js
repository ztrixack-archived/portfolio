/** @jsxImportSource @emotion/react */
import 'twin.macro'
import ArrowBounce from '../ArrowBounce'

const Intro = () => {
  return (
    <section tw="flex h-screen bg-black cursor-none">
      <div tw="m-auto justify-between text-center">
        <h3 tw="text-6xl text-white m-4 tracking-widest">Hello</h3>
        <p tw="text-gray-400 m-4">Thank you for your time</p>
      </div>
      <ArrowBounce />
    </section>
  )
}

export default Intro
