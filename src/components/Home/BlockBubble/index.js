/** @jsxImportSource @emotion/react */
import 'twin.macro'

const BlockBubble = () => {
  return (
    <section tw="flex h-screen bg-black cursor-none">
      <div tw="m-auto justify-between text-center">
        <h3 tw="text-6xl text-white m-4 tracking-widest">
          <span tw="text-purple-500">printf(</span>
          <span tw="text-yellow-500">'Hello World'</span>
          <span tw="text-purple-500">)</span>
        </h3>
        <p tw="text-green-500 m-4">// Welcome to my website :D</p>
      </div>
      <ArrowBounce />
    </section>
  )
}

export default BlockBubble
