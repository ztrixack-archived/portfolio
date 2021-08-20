import { FRAME_RATE } from 'configs/constant'
import { replaceAt } from 'configs/utils'
import Animations from '../../animations'
import Scene from '../scene'
import objects from './objects'

const getScenes = ({ height, width }) => {
  const centerwidth = Math.floor(width / 2)
  const centerHeight = Math.floor(height / 2)
  const { getCurrentState, getStateAt } = Scene.setupObjectPosition(
    FRAME_RATE,
    { x: 33, y: centerHeight + 5 },
    { height, width },
  )

  return objects.map(({ anim, label, labelAt, configs = {}, options = {} }) => {
    return Animations[anim](!!labelAt ? getStateAt(labelAt, label, configs) : getCurrentState(label, configs), options)
  })
}

const getDisplay = ({ screen, scenes, frame }) => {
  return screen
    .map((line, indexLine) =>
      scenes.reduce((displayLine, scene) => {
        const { position, time, frames } = scene
        if (indexLine < position.y) return displayLine

        const animation = Scene.getAnimationAtFrame({ ...scene, frame })
        if (!animation) return displayLine

        const round = Math.floor((frame - time.from) / frames.total)
        const newPosX = position.x + round * position.addX
        const newPosY = position.y + round * position.addY
        return replaceAt(displayLine, newPosX, animation[indexLine - newPosY])
      }, line),
    )
    .map(line => line.replaceAll(/ /g, '\xa0'))
    .map((line, i) => (
      <div key={i} tw="overflow-hidden">
        {line}
      </div>
    ))
}

const setup = ({ height, width }) => {
  const screen = [...Array(height)].map(() => ' '.repeat(width))
  const scenes = getScenes({ height, width })
  return ({ frame }) => getDisplay({ screen, scenes, frame })
}

export default { setup }
