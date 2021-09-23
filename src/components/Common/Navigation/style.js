import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

export const HeaderNav = tw.nav`bg-black`

export const NavList = tw.div`lg:flex lg:items-stretch lg:justify-end ml-auto`
export const NavLink = styled(Link)`
  ${tw`flex-grow-0 flex-shrink-0 relative p-8 leading-normal text-white no-underline flex items-center text-lg hover:text-blue-500 hover:bg-white`}
  transition: color 0.4s ease-out;
  line-height: 1;
  font-family: monospace;

  ${({ active }) => active == 'true' && tw`text-blue-500`}
`
