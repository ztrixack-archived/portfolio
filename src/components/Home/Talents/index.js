/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'

import talents from './talents'
import { Content, Header } from './style'
import Wave from '../Wave'

const Talents = () => {
  return (
    <section tw="flex h-screen bg-white cursor-none">
      <Wave />
      <div tw="max-w-xl lg:max-w-4xl m-auto px-8 justify-between">
        <div tw="flex flex-row flex-wrap mt-8 mix-blend-difference text-gray-300">
          <div tw="w-full lg:w-2/4 my-8">
            <Header>━ Skills</Header>
            <ul>
              {talents.skills.map(skill => (
                <li key={skill}>· {skill}</li>
              ))}
            </ul>
          </div>

          <div tw="w-full lg:w-2/4 my-8">
            <Header>━ Inspiration</Header>
            <Content>{talents.inspiration}</Content>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Talents
