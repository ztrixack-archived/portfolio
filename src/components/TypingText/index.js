/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import 'twin.macro'
import Cursor from '../Cursor'

const TypingText = ({ messages, rate = 75, delay = 500, theme = { field: {}, cursor: {} } }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)

  useEffect(() => {
    if (index === messages.length) return

    if (subIndex === messages[index].length + 1) {
      setIndex(index => index + 1)
      setSubIndex(0)
      return
    }

    const typingTimeout = setTimeout(
      () => {
        setSubIndex(subIndex => subIndex + 1)
      },
      subIndex === 0 || subIndex === messages[index].length ? delay : parseInt(Math.random() * rate),
    )

    return () => clearTimeout(typingTimeout)
  }, [subIndex, index])

  return (
    <>
      {messages.map((w, i) => {
        if (i === index) {
          return (
            <div key={i} tw="block whitespace-pre-line">
              <span style={theme.text}>{w.substring(0, subIndex)}</span>
              <Cursor style={theme.cursor}></Cursor>
            </div>
          )
        } else if (i < index) {
          return (
            <div key={i} tw="block whitespace-pre-line">
              <span style={theme.text}>{w}</span>
              {i === messages.length - 1 && <Cursor style={theme.cursor}></Cursor>}
            </div>
          )
        } else {
          return
        }
      })}
    </>
  )
}

export default TypingText
