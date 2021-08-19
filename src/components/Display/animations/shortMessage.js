import _prototype from './_prototype'
import { repeat, replaceAt } from '../../../configs/utils'

const block = [
  ' . . ', //
  '-   -',
  " ' '",
]

export default (params, { messages = [] }) => {
  const centerIndex = 2
  const maxLength = messages.map(message => message.length).reduce((max, length) => Math.max(max, length), 0)
  const horizontalBlock = [...block.map(blockLine => repeat(blockLine, centerIndex, maxLength))]

  const maxLine = messages.length
  const messageBlock = [...Array(maxLine)].map((_, i) => replaceAt(horizontalBlock[1], centerIndex, messages[i]))
  const blocks = [horizontalBlock[0], ...messageBlock, horizontalBlock[2]]

  return _prototype([blocks], 0, 0)(params)
}
