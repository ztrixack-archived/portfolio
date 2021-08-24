import tw, { styled } from 'twin.macro'

export const TerminalField = styled.div`
  font-size: 0.85rem;
  height: calc(100% - 40px);
  padding: 5px;
  overflow: auto;
  overflow-wrap: break-word;
  ${({ theme }) => theme}

  &::-webkit-scrollbar {
    width: 10px;
  }

  &.dark::-webkit-scrollbar-thumb {
    background-color: #333444;
  }

  &.light::-webkit-scrollbar-thumb {
    background-color: #aca9bb;
  }
`
