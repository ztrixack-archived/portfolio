/** @jsxImportSource @emotion/react */
import Text from '../Text'

const TerminalMultiText = ({ input, isError, hasBuffer }) => (
  <>
    {input.map(s => (
      <Text input={s} isError={isError} />
    ))}
    {hasBuffer && <div></div>}
  </>
)

export default TerminalMultiText
