/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'

import { Content, Header } from './style'

const TechStack = () => {
  return (
    <section tw="flex h-screen bg-white">
      <div tw="max-w-xl lg:max-w-4xl m-auto px-8 justify-between">
        <ul tw="whitespace-nowrap mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0 flex space-x-2 sm:space-x-6">
          <li tw="relative">
            <div tw="absolute inset-0 bg-gray-100"></div>
            <button
              type="button"
              tw="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-900"
            >
              Sizing
            </button>
          </li>
          <li tw="relative">
            <button
              type="button"
              tw="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400"
            >
              Color
            </button>
          </li>
          <li tw="relative">
            <button
              type="button"
              tw="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400"
            >
              Typography
            </button>
          </li>
          <li tw="relative">
            <button
              type="button"
              tw="block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400"
            >
              Shadows
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TechStack
