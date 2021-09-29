import { keyframes } from '@emotion/react'
import tw, { styled } from 'twin.macro'

const change = keyframes`
  0%, 12.66%, 100% {
    transform:translate3d(0,0,0);
  }
  16.66%, 29.32% {
    transform:translate3d(0,-25%,0);
  }
  33.32%,45.98% {
    transform:translate3d(0,-50%,0);
  }
  49.98%,62.64% {
    transform:translate3d(0,-75%,0);
  }
  66.64%,79.3% {
    transform:translate3d(0,-50%,0);
  }
  83.3%,95.96% {
    transform:translate3d(0,-25%,0);
  }
`
export const TextAnimate = styled.div`
  scroll-behavior: smooth;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  height: 32px;
`

export const TextAnimateList = styled.ul`
  ${tw`font-bold`}
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: left;
  list-style: none;

  animation-name: ${change};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`

export const TextAnimateItem = styled.li`
  line-height: 32px;
  margin: 0;
`
