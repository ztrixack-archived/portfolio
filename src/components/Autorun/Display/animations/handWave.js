import _prototype from './_prototype'

const handwave_left0 = [
  '\\o', //
  ' |\\',
  '/ \\',
]
const handwave_left1 = [
  '(o', //
  ' |\\',
  '/ \\',
]

const handwave_right0 = [
  ' o/', //
  '/|',
  '/ \\',
]
const handwave_right1 = [
  ' o)', //
  '/|',
  '/ \\',
]

export default (params, { model = 'left' }) => {
  const animations = {
    left: [handwave_left0, handwave_left1],
    right: [handwave_right0, handwave_right1],
  }

  const _default = animations['left']

  return _prototype(animations[model] || _default, 0, 0)(params)
}
