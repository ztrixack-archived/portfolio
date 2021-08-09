/** @jsxImportSource @emotion/react */
import React from 'react'
import tw, { styled } from 'twin.macro'
import Field from '../../components/Terminal/Field'

const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = React.useState(false)
  const [title, setTitle] = React.useState('Portfolio')
  const handleClose = () => (window.location.href = 'https://codepen.io/HuntingHawk')
  const handleMinMax = () => {
    setMaximized(!maximized)
    document.querySelector('#field').focus()
  }

  return (
    <Window
      tw="transition-all duration-200"
      style={maximized ? { height: '100vh', width: '100vw', maxWidth: '100vw' } : theme.terminal}
    >
      <div tw="flex items-center h-10 px-0 py-4 cursor-default" style={theme.window}>
        <span tw="mr-auto ml-4" style={{ color: theme.window.color }}>
          {title}
        </span>
        <Button tw="bg-green-500" onClick={handleMinMax} />
        <Button tw="bg-yellow-500" />
        <Button tw="bg-red-500" onClick={handleClose} />
      </div>
      <Field theme={theme} setTheme={setTheme} setTitle={setTitle} />
    </Window>
  )
}

export default Terminal

const Window = styled.div`
  width: 90vw;
  max-width: 900px;
  height: 550px;
`

const Button = tw.button`mr-4 border-none h-4 w-4 rounded-full shadow`
