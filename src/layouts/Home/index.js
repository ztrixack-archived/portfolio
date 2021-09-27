/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'
import Talents from 'components/Home/Talents'
import Greeting from 'components/Home/Greeting'
import Intro from 'components/Home/Intro'
import CircleCursor from 'components/Home/CircleCursor'
import TechStack from 'components/Home/TechStack'

const Home = () => {
  return (
    <>
      <main id="main">
        <Greeting />
        <Intro />
      </main>
      <main>
        <Talents />
        <TechStack />
      </main>
      <CircleCursor />
    </>
  )
}

export default Home
