/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro'

const Cursor = ({ style }) => <CursorField style={style}></CursorField>

export default Cursor

const CursorField = styled.span`
  ${tw`inline-block relative w-0.5 h-4`}
  bottom: -2px;
  left: 2px;
`
