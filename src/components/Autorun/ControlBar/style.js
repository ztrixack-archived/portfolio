import tw, { styled } from 'twin.macro'

export const Control = tw.div`flex flex-col items-center h-auto text-xs transition-opacity opacity-0 hover:opacity-100`

export const Timeline = tw.div`flex items-center`

export const StartTime = tw.span`mx-2`

export const Range = styled.input`
  -webkit-appearance: none;
  outline: none;

  background: #fceaf1;
  cursor: pointer;
  overflow: hidden;
  width: calc(100% - 40px);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    height: 5px;
    width: 5px;

    background: #a64e6d;
    box-shadow: -100vw 0 0 100vw #a64e6d;
  }
`
export const EndTime = tw.span`mx-2`

export const Action = tw.button`outline-none border border-white cursor-pointer w-6 h-6 text-xs`
