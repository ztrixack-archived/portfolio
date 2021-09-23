/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'
import Navigation from 'components/Common/Navigation'

const Home = () => {
  return (
    <>
      <Navigation />
      <div tw="flex h-screen bg-black">
        <div tw="m-auto justify-between">
          <h3 tw="text-white">Z</h3>
          <p tw="text-white">x</p>
        </div>
      </div>
    </>
  )
}

export default Home
