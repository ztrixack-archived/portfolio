/** @jsxImportSource @emotion/react */
import { useRef } from 'react'
import tw, { styled } from 'twin.macro'

const HeaderField = tw.header`fixed top-0 left-0 z-20 w-full h-36 px-4 pb-20`
const HeaderBackground = tw.div`absolute top-0 h-full w-full z-0`
const HeaderContainer = tw.div`flex items-center justify-between z-10 max-w-7xl h-12 mx-auto`
const Background = styled.div`
  background: linear-gradient(180deg, var(#0e1212) 3rem, rgba(14, 18, 18, 0));
  opacity: 1;
`

const Header = ({ children }) => {
  return (
    <HeaderField>
      <HeaderBackground>
        <Background />
      </HeaderBackground>
      <HeaderContainer>{children}</HeaderContainer>
    </HeaderField>
  )
}

export default Header
