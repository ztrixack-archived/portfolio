/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useEffect, useRef, useState } from 'react'

import { TerminalField } from './style'
import Display from '../Display'

import { CHAR_WIDTH, CHAR_HEIGHT } from '../../configs/constant'

const Field = ({ theme, setTitle }) => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
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
    }, 250)
  })

  const charHeight = Math.floor(height / CHAR_HEIGHT)
  const charWidth = Math.floor(width / CHAR_WIDTH)

  return (
    <TerminalField id="field" ref={ref} theme={theme.field} tabIndex={0}>
      <Display height={charHeight} width={charWidth} theme={theme} setTitle={setTitle} />
    </TerminalField>
  )
}

export default Field
