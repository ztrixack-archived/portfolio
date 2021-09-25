/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'
import Talents from 'components/Home/Talents'
import Intro from 'components/Home/Intro'
import CircleCursor from 'components/Home/CircleCursor'

const Home = () => {
  return (
    <>
      <main id="main">
        <Intro />
        <Talents />
      </main>
      <CircleCursor />
    </>
  )
}

export default Home
