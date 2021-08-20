/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useEffect, useState } from 'react'

import { FRAME_RATE } from 'configs/constant'
import Scene01 from './scenario/scene01'
import Scene02 from './scenario/scene02'

const getChapterTime = index => {
  const time = {
    0: 20,
    1: 40,
  }

  return time[index] * FRAME_RATE
}

const Display = ({ height, width, setTitle }) => {
  const [frame, setFrame] = useState(0 * FRAME_RATE)
  const [chapter, setChapter] = useState(1)
  const [scenarios, setScenarios] = useState([() => []])

  useEffect(() => {
    setScenarios(() => [Scene01.setup({ height, width }), Scene02.setup({ height, width })])
  }, [height, width])

  useEffect(() => {
    if (frame + 1 === 2 * getChapterTime(chapter)) return

    if (frame + 1 === getChapterTime(chapter)) {
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

  const display = chapter < scenarios.length ? scenarios[chapter]({ frame: frame % getChapterTime(chapter) }) : []

  return display
}

export default Display
