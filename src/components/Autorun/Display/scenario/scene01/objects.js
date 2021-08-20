import { FRAME_RATE } from 'configs/constant'

export const me = [
  {
    label: 'headup',
    anim: 'headUp',
  },
  {
    anim: 'standUp',
    configs: { changeRate: FRAME_RATE / 8 },
  },
  {
    anim: 'walk',
    configs: { loop: 4, takeX: 4 },
  },
  {
    anim: 'somersault',
    configs: { loop: 2, takeX: 8 },
  },
  {
    anim: 'standUp',
    configs: { changeRate: FRAME_RATE / 4 },
  },
  {
    label: 'handwave',
    anim: 'handWave',
    configs: { loop: 4 },
    options: { model: 'left' },
  },
  {
    anim: 'standUp',
    configs: { changeRate: 2 * FRAME_RATE },
  },
  {
    anim: 'handUp',
    configs: { loop: 2 },
    options: { model: 'right_freeze' },
  },
  {
    anim: 'standUp',
    configs: { loop: 3 },
  },
  {
    anim: 'flick',
  },
  {
    anim: 'flick',
    configs: { changeRate: (25 / 8) * FRAME_RATE },
    options: { model: 'hologram_freeze' },
  },
]

export const messages = [
  {
    anim: 'shortMessage',
    configs: { addX: 2, addY: -3 },
    options: { messages: ['Hi there!'] },
    labelAt: 'headup',
  },
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, addX: 2, addY: -5, changeRate: 2 * FRAME_RATE },
    options: { messages: ['Thanks for viewing my profile!'] },
    labelAt: 'handwave',
  },
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, changeRate: 2 * FRAME_RATE },
    options: { messages: ["I'm Tanawat Hongthai.", "You can call me 'Toom'."] },
  },
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, changeRate: 2 * FRAME_RATE },
    options: { messages: ["I'm the full stack developer.", 'The man who made this website.'] },
  },
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, changeRate: 2 * FRAME_RATE },
    options: { messages: ["Let's me show you my skills"] },
  },
]

export default [...me, ...messages]
