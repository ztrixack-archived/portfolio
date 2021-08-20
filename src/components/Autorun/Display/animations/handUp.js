import _prototype from './_prototype'

const handup = [
  ' o', //
  '/|\\',
  '/ \\',
]

const handup_both = [
  '\\o/', //
  ' |',
  '/ \\',
]

const handup_left = [
  '\\o', //
  ' |\\',
  '/ \\',
]

const handup_right = [
  ' o/', //
  '/|',
  '/ \\',
]

export default (params, { model = 'both_freeze' }) => {
  const animations = {
    left: [handup, handup_left],
    left_freeze: [handup_left],
    right: [handup, handup_right],
    right_freeze: [handup_right],
    both: [handup, handup_both],
    both_freeze: [handup_both],
  }

  const _default = animations['both']

  return _prototype(animations[model] || _default, 0, 0)(params)
}
