import tw, { styled } from 'twin.macro'

export const WindowContainer = styled.div`
  ${({ maximized }) =>
    maximized
      ? tw`h-screen w-screen max-w-full`
      : `width: 90vw;
  max-width: 900px;
  height: 550px;`}
  ${tw`transition-all duration-500 ease-in-out`}
  ${({ theme }) => theme}
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
