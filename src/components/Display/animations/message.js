import _prototype from './_prototype'
import { repeat, replaceAt } from '../../../configs/utils'

const block = [
  ' ._______. ', //
  ' |       | ',
  ' |       | ',
  ' |_______| ',
  '           ',
]

export default (params, { messages = [], direction = 'right' }) => {
  const centerIndex = 5
  const maxLength = messages.map(message => message.length).reduce((max, length) => Math.max(max, length), 0)
  const horizontalBlock = [...block.map(blockLine => repeat(blockLine, centerIndex, maxLength))]

  const maxLine = messages.length
  const messageBlock = [...Array(maxLine)].map((_, i) => replaceAt(horizontalBlock[2], centerIndex, messages[i]))
  const blocks = [...horizontalBlock.slice(0, 2), ...messageBlock, ...horizontalBlock.slice(3, 5)]

  let pointerIndexX = direction === 'right' ? 0 : horizontalBlock[0].length - 1
  let pointerIndexY = blocks.length - 1

  const y = params.y - maxLine + 1
  let x = direction === 'right' ? params.x : params.x - maxLength - 11

  if (x < 0) {
    if (direction !== 'right') {
      pointerIndexX += x
    }
    x = 0
  } else if (x + maxLength + 11 > params.maxWidth) {
    if (direction === 'right') {
      pointerIndexX += x - (params.maxWidth - maxLength - 11)
    }
    x = params.maxWidth - maxLength - 11
  }

  if (direction === 'right') {
    blocks[pointerIndexY] = replaceAt(blocks[pointerIndexY], pointerIndexX, '/')
  } else {
    blocks[pointerIndexY] = replaceAt(blocks[pointerIndexY], pointerIndexX, '\\')
  }

  return _prototype([blocks], 0, 0)({ ...params, y, x })
}
