/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'
import Main from 'components/AboutMe/Main'
import Image from 'components/AboutMe/Image'

const AboutMe = () => {
  return (
    <div
      tw="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover w-full"
      style={{ 'background-image': "url('https://i.imgur.com/uTsbdus.jpg')" }}
    >
      <div tw="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <Main photo="https://i.imgur.com/uTsbdusb.jpg" />
        <Image src="https://i.imgur.com/ftwj01a.jpg" />
      </div>
    </div>
  )
}

export default AboutMe
