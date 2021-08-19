export const replaceAt = (string, index, replace) => {
  if (!replace) return string
  if (index < 0) {
    const newIndex = replace.length + index
    return replace.substring(-index, newIndex) + string.substring(newIndex)
  }
  return string.substring(0, index) + replace + string.substring(index + replace.length)
}

export const repeat = (text, repeatIndex, length) => {
  if (text.length < repeatIndex) return text
  return text.substring(0, repeatIndex) + (text[repeatIndex] + '').repeat(length) + text.substring(repeatIndex + 1)
}
