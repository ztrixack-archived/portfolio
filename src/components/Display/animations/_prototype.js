import { FRAME_RATE } from '../../../configs/constant'

export default (anim = [], addX = 0, addY = 0) =>
  ({ x = 0, y = 0, start = 0, loop = 1, rate = FRAME_RATE }) => {
    const frameStart = [...Array(anim.length)].map(() => rate / anim.length)
    const rates = frameStart.reduce((total, value, index) => [...total, total[index] + value], [0])
    const total = frameStart.reduce((total, value) => total + value, 0)
    const duration = loop * total

    return {
      position: { x, y, addX, addY },
      time: { from: start, to: start + duration },
      animations: anim,
      frames: { start: rates, total },
    }
  }
