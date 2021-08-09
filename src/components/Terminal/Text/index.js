/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro'

const TerminalText = ({ input, isCommand, isError, hasBuffer }) => (
  <>
    {isCommand && <div tw="inline-block mr-2 whitespace-pre-line text-green-500">C:\Users\guest</div>}
    <div>
      {isCommand && <div tw="inline-block mr-2 whitespace-pre-line text-blue-300">λ </div>}
      <SpanText isError={!isCommand && isError}>{input}</SpanText>
    </div>
    {hasBuffer && <div></div>}
  </>
)

export default TerminalText

const SpanText = styled.span`
  ${({ isError }) => (isError ? tw`text-red-500` : tw`text-gray-100`)}
`
