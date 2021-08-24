/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { Action, Control, EndTime, Range, StartTime, Timeline } from './style'

function getDuration(time) {
  const minute = Math.floor((time / 60) % 60).toString()
  const second = Math.floor(time % 60)
    .toString()
    .padStart(2, '0')
  return `${minute}:${second}`
}

const ControlBar = ({ start, end, run, setRun, setTime }) => {
  const onClick = () => {
    setRun(run => !run)
  }
  const onInput = e => {
    const { value } = e.target
    setTime(value)
  }

  return (
    <Control>
      <Timeline>
        <StartTime>{getDuration(start)}</StartTime>
        <Range type="range" step="1" value={start} max={end} onInput={onInput} />
        <EndTime>{getDuration(end)}</EndTime>
      </Timeline>
      <Action onClick={onClick}>{run ? '⏸' : '▶'}</Action>
    </Control>
  )
}

export default ControlBar
