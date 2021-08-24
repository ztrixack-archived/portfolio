import tw, { css, styled } from 'twin.macro'
import { keyframes } from '@emotion/react'

const shake = keyframes`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`

export const WindowContainer = styled.div`
  ${({ maximized }) =>
    maximized
      ? tw`h-screen w-screen max-w-full`
      : `width: 90vw;
  max-width: 900px;
  height: 550px;`}
  ${tw`transition-all duration-500 ease-in-out`}
  ${({ theme }) => theme}

  
  ${({ resume }) =>
    resume &&
    css`
      animation: ${shake} 0.5s;
      animation-iteration-count: 1;
    `}
`

export const Window = styled.div`
  ${tw`flex items-center h-10 px-0 py-4 cursor-default`}
  ${({ theme }) => theme}
`

export const Button = tw.button`ml-4 border-none h-4 w-4 rounded-full shadow-md`

export const Title = styled.span`
  ${tw`ml-auto mr-4`}
  ${({ theme }) => `color: ${theme.color};`}
`
