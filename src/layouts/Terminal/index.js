/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'

import { WindowContainer, Window, Button, Title } from './style'
import Field from '../../components/Field'

const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = React.useState(false)
  const [title, setTitle] = React.useState('Profile')

  const handleClose = () => {}
  const handleHidden = () => {}
  const handleMinMax = () => {
    setMaximized(!maximized)
    document.querySelector('#field').focus()
  }

  return (
    <WindowContainer maximized={maximized} theme={theme.terminal}>
      <Window theme={theme.window}>
        <Button tw="bg-red-500" onClick={handleClose} />
        <Button tw="bg-yellow-500" onClick={handleHidden} />
        <Button tw="bg-green-500" onClick={handleMinMax} />
        <Title theme={theme.window}>{title}</Title>
      </Window>
      <Field theme={theme} setTheme={setTheme} setTitle={setTitle} />
    </WindowContainer>
  )
}

export default Terminal
