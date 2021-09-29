/** @jsxImportSource @emotion/react */
import 'twin.macro'
import Story from './Story'
import Diary from './Diary'
import Title from './Title'
import Journey from './Journey'

const Intro = () => {
  return (
    <section tw="flex bg-white">
      <div tw="max-w-screen-lg mx-auto px-3 py-16">
        <Title />
        <Diary />
        <Journey />
        <Story />
      </div>
    </section>
  )
}

export default Intro
