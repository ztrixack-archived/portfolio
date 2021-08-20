import { FRAME_RATE } from 'configs/constant'

export const me = [
  {
    label: 'start',
    anim: 'standUp',
    configs: { changeRate: 25 * FRAME_RATE },
  },
]

export const messages = [
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, addX: 2, addY: -5, changeRate: 2 * FRAME_RATE },
    options: { messages: ['Skill'] },
    labelAt: 'start',
  },
]

export default [...me, ...messages]
