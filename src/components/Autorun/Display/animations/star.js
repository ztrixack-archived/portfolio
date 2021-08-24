import _prototype from './_prototype'

const star_00 = [
  '', //
  '  o 🞯',
  ' /|v',
  ' / \\',
]

const star_01 = [
  '', //
  '  o 🞰',
  ' /|v',
  ' / \\',
]

const star_02 = [
  '', //
  '  o 🞱',
  ' /|v',
  ' / \\',
]
const star_03 = [
  '', //
  '  o 🞲',
  ' /|v',
  ' / \\',
]
const star_04 = [
  '', //
  '  o 🞳',
  ' /|v',
  ' / \\',
]
const star_05 = [
  '', //
  '  o 🞴',
  ' /|v',
  ' / \\',
]
const star_10 = [
  '', //
  '  o 🞻',
  ' /|v',
  ' / \\',
]

const star_11 = [
  '', //
  '  o 🞼',
  ' /|v',
  ' / \\',
]

const star_12 = [
  '', //
  '  o 🞽',
  ' /|v',
  ' / \\',
]
const star_13 = [
  '', //
  '  o 🞾',
  ' /|v',
  ' / \\',
]

const star_14 = [
  '', //
  '  o 🞿',
  ' /|v',
  ' / \\',
]

export default (params, { model = 'star' }) => {
  const animations = {
    star: [star_00, star_01, star_02, star_03, star_04, star_05, star_10, star_11, star_12, star_13, star_14],
  }

  const _default = animations['star']

  return _prototype(animations[model] || _default, 0, 0)({ ...params, x: params.x - 1, y: params.y - 1 })
}
