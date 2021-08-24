/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useEffect, useState } from 'react'

import { FRAME_RATE } from 'configs/constant'
import Scene01 from './scenario/scene01'
import Scene02 from './scenario/scene02'
import ControlBar from '../ControlBar'

const getChapterEndingFrame = index => {
  if (index < 0) return 0

  const time = {
    0: 30,
    1: 80,
  }

  return time[index] * FRAME_RATE
}

const Display = ({ height, width, setTitle, setErrorScene, setTheme }) => {
  const [frame, setFrame] = useState(0 * FRAME_RATE)
  const [run, setRun] = useState(true)
  const [chapter, setChapter] = useState(0)
  const [scenarios, setScenarios] = useState([() => []])

  useEffect(() => {
    setScenarios(() => [Scene01.setup({ height, width }), Scene02.setup({ height, width })])
  }, [height, width])

  useEffect(() => {
    if (!run || chapter > 1) return

    if (frame > getChapterEndingFrame(chapter)) {
      setChapter(chapter => chapter + 1)
    }

    const timeout = setTimeout(() => {
      // setTitle(chapter + ' ' + ((frame + 1) / FRAME_RATE).toFixed(0))
      setFrame(frame => frame + 1)
    }, 1000 / FRAME_RATE)

    return () => {
      clearTimeout(timeout)
    }
  }, [run, frame])

  useEffect(() => {
    if (chapter === 2) {
      setErrorScene(true)
      setTheme('error')
    }
  }, [chapter])

  const setTime = time => {
    let frame = time * FRAME_RATE
    ;[0, 1].forEach(chapter => {
      if (frame < 0) return
      const endingTime = getChapterEndingFrame(chapter)
      if (frame > endingTime) {
        frame -= endingTime
        return
      }

      setChapter(chapter)
      setFrame(time * FRAME_RATE)
      frame = -1
    })
  }

  const display =
    chapter < scenarios.length ? scenarios[chapter]({ frame: frame - getChapterEndingFrame(chapter - 1) }) : []

  return (
    <>
      {display}
      <ControlBar
        run={run}
        setRun={setRun}
        setTime={setTime}
        start={frame / FRAME_RATE}
        end={getChapterEndingFrame(1) / FRAME_RATE}
      />
    </>
  )
}

export default Display
