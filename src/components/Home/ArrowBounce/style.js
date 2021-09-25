import { keyframes } from '@emotion/react'
import tw, { styled } from 'twin.macro'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`

export const Arrow = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  animation: ${bounce} 2s infinite;
`
