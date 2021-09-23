/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Terminal from '../Terminal'
import AboutMe from 'layouts/AboutMe'
import Home from 'layouts/Home'

const getTheme = themeName => {
  const themes = {
    dark: {
      name: 'dark',
      app: { backgroundColor: '#333444' },
      terminal: { boxShadow: '0 2px 5px #111' },
      window: { backgroundColor: '#222345', color: '#F4F4F4' },
      field: { backgroundColor: '#222333', color: '#F4F4F4', fontWeight: 'normal' },
      cursor: { animation: '1.0s blink-dark step-end infinite' },
      text: tw`text-green-500`,
    },
    light: {
      name: 'light',
      app: { backgroundColor: '#ACA9BB' },
      terminal: { boxShadow: '0 2px 5px #33333375' },
      window: { backgroundColor: '#5F5C6D', color: '#E3E3E3' },
      field: { backgroundColor: '#E3E3E3', color: '#474554', fontWeight: 'bold' },
      cursor: { animation: '1.0s blink-light step-end infinite' },
      text: tw`text-green-500`,
    },
    error: {
      name: 'error',
      app: { backgroundColor: '#333444' },
      terminal: { boxShadow: '0 2px 5px #33333375' },
      window: tw`bg-red-700 text-white`,
      field: tw`bg-red-300 text-white font-bold`,
      cursor: {},
    },
  }

  return themes[themeName]
}

const App = () => {
  const [theme, setTheme] = React.useState('dark')
  const themeVars = getTheme(theme)

  return (
    <Router>
      <Home />
      {/* <div tw="h-screen flex justify-center items-center overflow-hidden" style={themeVars.app}>
        <Terminal theme={themeVars} setTheme={setTheme} />
        <AboutMe />
      </div> */}
    </Router>
  )
}

export default App
