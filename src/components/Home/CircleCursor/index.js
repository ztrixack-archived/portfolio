/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { Cursor } from './style'

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const CircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)

  const addEventListeners = () => {
    const mainEl = document.getElementById('main')
    mainEl?.addEventListener('mousemove', onMouseMove)
    mainEl?.addEventListener('mouseenter', onMouseEnter)
    mainEl?.addEventListener('mouseleave', onMouseLeave)
    mainEl?.addEventListener('mousedown', onMouseDown)
    mainEl?.addEventListener('mouseup', onMouseUp)
  }

  const removeEventListeners = () => {
    const mainEl = document.getElementById('main')
    mainEl?.removeEventListener('mousemove', onMouseMove)
    mainEl?.removeEventListener('mouseenter', onMouseEnter)
    mainEl?.removeEventListener('mouseleave', onMouseLeave)
    mainEl?.removeEventListener('mousedown', onMouseDown)
    mainEl?.removeEventListener('mouseup', onMouseUp)
  }

  useEffect(() => {
    addEventListeners()
    return () => removeEventListeners()
  }, [addEventListeners, removeEventListeners])

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  if (typeof navigator !== 'undefined' && isMobile()) return null

  return (
    <Cursor
      hidden={hidden}
      clicked={clicked}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CircleCursor
