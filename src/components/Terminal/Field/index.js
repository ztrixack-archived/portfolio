/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useEffect, useRef } from 'react'

import { TerminalField } from './style'

const Field = ({ theme }) => {
  return (
    <TerminalField id="field" theme={theme.field} tabIndex={0}>
      <div></div>
    </TerminalField>
  )
}

export default Field
