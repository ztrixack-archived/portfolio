import _prototype from './_prototype'

const chars = [' ', '-', '\\', '|', '/', '·']

export default params => {
  const height = params.maxHeight
  const width = params.maxWidth

  const animations = [1, 2, 3, 4, 1, 2, 3, 4, 1, 5, 0].map(index =>
    [...Array(height)].map(() => chars[index].repeat(width)),
  )

  return _prototype(animations, 0, 0)(params)
}
