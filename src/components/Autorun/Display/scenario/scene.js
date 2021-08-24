const getAnimationAtFrame = ({ animations, time, frames, frame }) => {
  if (frame >= time.from && frame < time.to) {
    const index = (frame - time.from) % frames.total
    const timeframe = frames.start.findIndex(duration => duration > index) - 1
    if (timeframe < 0) return animations[animations.length - 1]
    return animations[timeframe]
  } else {
    return null
  }
}

const display = ({ screen, scenes, frame }) => {
  const filtedScene = scenes.filter(scene => scene.time.from <= frame && scene.time.to > frame)

  return screen
    .map(line => line.clear())
    .map((line, indexLine) =>
      filtedScene.reduce((result, scene) => {
        const { position, time, frames } = scene
        if (indexLine < position.y) return result

        const animation = getAnimationAtFrame({ ...scene, frame })
        if (!animation) return result

        const round = Math.floor((frame - time.from) / frames.total)
        const newPosX = position.x + round * position.addX
        const newPosY = position.y + round * position.addY
        const index = indexLine - newPosY

        if (index >= 0 && index < animation.length) {
          const data = {
            Component: 'span',
            content: animation[index],
            offset: newPosX,
            style: (scene.styles && scene.styles[index]) || undefined,
          }

          result.save(data)
        }

        return result
      }, line),
    )
    .map((line, i) => (
      <div key={i} tw="block overflow-hidden w-full cursor-default" style={{ height: '18px' }}>
        {line.getComponent()}
      </div>
    ))
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
      changeRate = frameRate,
      freeze = 0,
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
      freeze,
    }

    if (changeRate !== frameRate) result.rate = changeRate

    // next data
    posX += loop * takeX
    posY += loop * takeY
    time += loop * takeTime * (changeRate / frameRate) + freeze

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

export default { display, setupObjectPosition }
