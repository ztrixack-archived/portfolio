import _prototype from './_prototype'

export default (params, { messages = [], styles = [] }) => {
  let maxLength = 0
  const prevBlock = []
  const animations = messages.reduce((result, message) => {
    const text = message.split('').reduce((text, char) => {
      const newText = text + char
      result.push([...prevBlock, newText])
      return newText
    }, '')

    if (text.length > maxLength) maxLength = text.length

    prevBlock.push(text)

    return result
  }, [])

  const y = params.y - messages.length + 1
  const x = params.x < 0 ? 0 : params.x + maxLength + 11 > params.maxWidth ? params.maxWidth - maxLength - 11 : params.x

  return _prototype(animations, 0, 0)({ ...params, y, x, styles })
}
