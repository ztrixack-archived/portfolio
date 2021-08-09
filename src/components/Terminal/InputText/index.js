/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro'

const InputText = ({ input, theme }) => (
  <>
    <div tw="inline-block mr-2 whitespace-pre-line text-green-500">C:\Users\guest</div>
    <div>
      <div tw="inline-block mr-2 whitespace-pre-line text-blue-300">λ </div>
      <span tw="text-blue-100">{input}</span>
      <Cursor style={theme}></Cursor>
      {input.length === 0 && <GhostText> try 'autorun' command</GhostText>}
    </div>
  </>
)

export default InputText

const Cursor = styled.div`
  ${tw`inline-block relative w-0.5 h-4`}
  bottom: -2px;
  left: 2px;
`

const GhostText = tw.span`inline-block italic text-gray-500`
