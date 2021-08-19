const getAnimationAtFrame = ({ animations, time, frames, frame }) => {
  if (frame >= time.from && frame < time.to) {
    const index = (frame - time.from) % frames.total
    const timeframe = frames.start.findIndex(duration => duration > index) - 1
    return animations[timeframe]
  } else {
    return null
  }
}

const setupObjectPosition = (frameRate, { start = 0, x = 0, y = 0 }, { height, width }) => {
  const maxHeight = height
  const maxWidth = width
  let records = {}
  let time = start
  let posX = x
  let posY = y

  const getCurrentState = (
    label = records.length,
    {
      setX = posX,
      setY = posY,
      setStartTime = time,
      addX = 0,
      addY = 0,
      addStartTime = 0,
      loop = 1,
      tempX = 0,
      tempY = 0,
      tempTime = 0,
      tempLoop = 0,
      takeX = 0,
      takeY = 0,
      takeTime = frameRate,
      changeRate,
    },
  ) => {
    posX = setX + addX
    posY = setY + addY
    time = setStartTime + addStartTime
    records = { ...records, [label]: { time, posX, posY } }

    let result = {
      x: posX + tempX,
      y: posY + tempY,
      start: time + tempTime,
      loop: loop + tempLoop,
      maxHeight,
      maxWidth,
    }

    if (changeRate) result.rate = changeRate

    // next data
    posX += loop * takeX
    posY += loop * takeY
    time += loop * takeTime

    return result
  }

  const getStateAt = (labelAt, label = records.length, params) => {
    const { time: ts, posX: x, posY: y } = records[labelAt]

    time = ts
    posX = x
    posY = y

    return getCurrentState(label, params)
  }

  return {
    getStateAt,
    getCurrentState,
  }
}

export default { getAnimationAtFrame, setupObjectPosition }
