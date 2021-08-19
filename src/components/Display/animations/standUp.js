import _prototype from './_prototype'

const standUp0 = [
  ' o', //
  '/|\\',
  '/ \\',
]

const standUp1 = [
  ' o', //
  '(|)',
  '/ \\',
]

export default (params, { model = 'default' }) => {
  const models = {
    default: standUp0,
    fat: standUp1,
  }

  return _prototype([models[model] || standUp0], 0, 0)(params)
}
