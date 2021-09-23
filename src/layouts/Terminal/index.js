/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'

import ResumeField from 'components/Resume/Field'
import AutorunField from 'components/Autorun/Field'
import TerminalField from 'components/Terminal/Field'
import { WindowContainer, Window, Button, Title } from './style'

const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = React.useState(false)
  const [autorun, setAutorun] = React.useState(true)
  const [errorScene, setErrorScene] = React.useState(false)
  const [title, setTitle] = React.useState('Profile')

  const handleClose = () => {}
  const handleHidden = () => {}
  const handleMinMax = () => {
    setMaximized(!maximized)
    document.querySelector('#field').focus()
  }

  const Field = errorScene ? ResumeField : autorun ? AutorunField : TerminalField

  return (
    <WindowContainer maximized={maximized} theme={theme.terminal} resume={errorScene}>
      <Window theme={theme.window}>
        <Button tw="bg-red-500" onClick={handleClose} />
        <Button tw="bg-yellow-500" onClick={handleHidden} />
        <Button tw="bg-green-500" onClick={handleMinMax} />
        <Title theme={theme.window}>{title}</Title>
      </Window>
      <Field
        theme={theme}
        setTheme={setTheme}
        setTitle={setTitle}
        setAutorun={setAutorun}
        setErrorScene={setErrorScene}
      />
    </WindowContainer>
  )
}

export default Terminal
