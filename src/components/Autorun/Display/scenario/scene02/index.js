import { FRAME_RATE } from 'configs/constant'
import AsciiArt from 'configs/AsciiArt'
import Animations from '../../animations'
import Scene from '../scene'
import objects from './objects'

const getScenes = ({ height, width }) => {
  const centerHeight = Math.floor(height / 2)
  const { getCurrentState, getStateAt } = Scene.setupObjectPosition(
    FRAME_RATE,
    { x: 32, y: centerHeight + 5 },
    { height, width },
  )

  return objects.map(({ anim, label, labelAt, configs = {}, options = {} }) => {
    return Animations[anim](!!labelAt ? getStateAt(labelAt, label, configs) : getCurrentState(label, configs), options)
  })
}

const setup = ({ height, width }) => {
  const screen = [...Array(height)].map(() => new AsciiArt())
  const scenes = getScenes({ height, width })
  return ({ frame }) => Scene.display({ screen, scenes, frame })
}

export default { setup }
