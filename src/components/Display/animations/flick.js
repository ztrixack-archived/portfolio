import _prototype from './_prototype'

const flick_0 = [
  '  o', //
  ' /|v',
  ' / \\',
]

const flick_1 = [
  '  o', //
  ' /|v*',
  ' / \\',
]

const flick_2 = [
  '  _', //
  ' /|v',
  ' / \\',
]

const flick_3 = [
  '', //
  " 'i'",
  ' / \\',
]

const flick_4 = [
  '', //
  ' .:.',
  ' / \\',
]

const flick_5 = [
  '', //
  '  .',
  ".:':.",
]

const flick_6 = [
  '', //
  '  .',
  '.;:;.',
]

export default (params, { model = 'flick' }) => {
  const animations = {
    flick: [flick_0, flick_1, flick_1, flick_2, flick_3, flick_4, flick_5, flick_6],
    sand: [flick_6],
  }

  const _default = animations['flick']

  return _prototype(animations[model] || _default, 0, 0)(params)
}
