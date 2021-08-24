import _prototype from './_prototype'

const flick_0 = [
  '', //
  '  o',
  ' /|v',
  ' / \\',
]

const flick_1 = [
  '', //
  '  o .',
  ' /|v',
  ' / \\',
]

const flick_hologram_0 = [
  '', //
  "  o '",
  ' /|v',
  ' / \\',
]

const flick_hologram_1 = [
  '', //
  '  o *',
  ' /|v',
  ' / \\',
]

const flick_sand_0 = [
  '', //
  '  _',
  ' /|v',
  ' / \\',
]

const flick_sand_1 = [
  '', //
  '',
  " 'i'",
  ' / \\',
]

const flick_sand_2 = [
  '', //
  '',
  ' .:.',
  ' / \\',
]

const flick_sand_3 = [
  '', //
  '',
  '  .',
  ".:':.",
]

const flick_sand_4 = [
  '', //
  '',
  '  .',
  '.;:;.',
]

export default (params, { model = 'hologram' }) => {
  const animations = {
    flick: [flick_0, flick_1, flick_1],
    flick_freeze: [flick_1],
    hologram: [flick_0, flick_1, flick_1, flick_hologram_0, flick_hologram_1],
    sand: [flick_0, flick_1, flick_1, flick_sand_0, flick_sand_1, flick_sand_2, flick_sand_3, flick_sand_4],
    sand_freeze: [flick_sand_4],
  }

  const _default = animations['flick']

  return _prototype(animations[model] || _default, 0, 0)({ ...params, x: params.x - 1, y: params.y - 1 })
}
