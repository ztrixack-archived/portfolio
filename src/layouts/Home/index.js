/** @jsxImportSource @emotion/react */
import 'twin.macro'

import Greeting from 'components/Home/Greeting'
import Intro from 'components/Home/Intro'
import CircleCursor from 'components/Home/CircleCursor'
import FooterInfo from 'components/Home/FooterInfo'
import Wave from 'components/Home/Wave'
import FooterWave from 'components/Home/FooterWave'

const Home = () => {
  return (
    <>
      <main id="main" tw="cursor-none mix-blend-difference">
        <Greeting />
        <Wave />
        <Intro />
      </main>
      <footer>
        <FooterWave />
        <FooterInfo />
      </footer>
      <CircleCursor />
    </>
  )
}

export default Home
