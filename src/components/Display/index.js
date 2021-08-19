/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useEffect, useState } from 'react'

import { SCENE_RATE, FRAME_RATE } from '../../configs/constant'
import Scene01 from './scenario/scene01/index'

const Display = ({ height, width, setTitle }) => {
  const [frame, setFrame] = useState(0)
  const [chapter, setChapter] = useState(0)
  const [scenarios, setScenarios] = useState([() => []])

  useEffect(() => {
    setScenarios(() => [Scene01.setup({ height, width })])
  }, [height, width])

  useEffect(() => {
    if (frame + 1 === 1 * SCENE_RATE * FRAME_RATE) return

    if (frame + 1 === SCENE_RATE * FRAME_RATE) {
      setChapter(chapter => chapter + 1)
    }

    const timeout = setTimeout(() => {
      setTitle(((frame + 1) / FRAME_RATE).toFixed(0))
      setFrame(frame => frame + 1)
    }, 1000 / FRAME_RATE)

    return () => {
      clearTimeout(timeout)
    }
  }, [frame])

  const display = chapter < scenarios.length ? scenarios[chapter]({ frame: frame % (SCENE_RATE * FRAME_RATE) }) : []

  return display
}

export default Display
