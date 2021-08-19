import { FRAME_RATE } from '../../../../configs/constant'

export const me = [
  {
    label: 'headup',
    anim: 'headUp',
  },
  {
    anim: 'standUp',
    configs: { takeTime: FRAME_RATE / 8 },
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
    configs: { takeTime: FRAME_RATE / 4 },
  },
  {
    label: 'handwave',
    anim: 'handWave',
    configs: { loop: 4 },
    options: { model: 'left' },
  },
  {
    anim: 'standUp',
    configs: { loop: 2 },
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
    configs: { loop: 2 },
    options: { model: 'sand' },
  },
  {
    anim: 'transaction',
    configs: { setX: 0, setY: 0, changeRate: FRAME_RATE * 3, takeTime: 3 },
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
    configs: { addStartTime: FRAME_RATE / 2, addX: 2, addY: -5, loop: 2 },
    options: { messages: ['Thanks for viewing my profile!'] },
    labelAt: 'handwave',
  },
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, loop: 2 },
    options: { messages: ["I'm Tanawat Hongthai.", "You can call me 'Toom'."] },
  },
  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, loop: 2 },
    options: { messages: ["I'm the full stack developer.", 'The man who made this website.'] },
  },

  {
    anim: 'message',
    configs: { addStartTime: FRAME_RATE / 2, loop: 2 },
    options: { messages: ["Let's me show you my skills"] },
  },
]

export default [...me, ...messages]
