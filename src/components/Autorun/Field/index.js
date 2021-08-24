/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useEffect, useRef, useState } from 'react'

import { CHAR_WIDTH, CHAR_HEIGHT } from 'configs/constant'
import { TerminalField } from './style'
import Display from '../Display'

const Field = ({ theme, setTheme, setTitle, setErrorScene }) => {
  const [height, setHeight] = useState(40)
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        const style = window.getComputedStyle(ref.current)
        const spaceY =
          parseFloat(style.paddingTop) +
          parseFloat(style.paddingBottom) +
          parseFloat(style.marginTop) +
          parseFloat(style.marginBottom)
        const spaceX =
          parseFloat(style.paddingLeft) +
          parseFloat(style.paddingRight) +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight)

        setHeight(ref.current.clientHeight - spaceY)
        setWidth(ref.current.clientWidth - spaceX)
      }
    }, 250)
  })

  const charHeight = Math.floor((height - 40) / CHAR_HEIGHT)
  const charWidth = Math.floor(width / CHAR_WIDTH)

  return (
    <TerminalField id="field" ref={ref} theme={theme.field} tabIndex={0}>
      <Display
        height={charHeight}
        width={charWidth}
        theme={theme}
        setTheme={setTheme}
        setTitle={setTitle}
        setErrorScene={setErrorScene}
      />
    </TerminalField>
  )
}

export default Field
