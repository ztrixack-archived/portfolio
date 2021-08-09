/** @jsxImportSource @emotion/react */
import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

import menu from './menu'

const HeaderNav = tw.nav`flex items-center`
const NavUL = tw.div`flex items-center list-none`
const NavList = tw.div`flex flex-initial flex-shrink-0 ml-4 list-none`
const NavLink = styled(Link)`
  opacity: 0.5;
  cursor: pointer;
  height: 2rem;
  display: flex;
  align-items: center;
  color: #dbdbdb;
  transition: color 0.4s ease-out;
  line-height: 1;
  text-decoration: none;
  font-family: monospace;

  ${({ active }) => active == 'true' && tw`text-red-500`}
`

const Navigation = () => {
  const location = useLocation()

  const isActive = useCallback(
    target => {
      if (target === '/') {
        return location.pathname === '/'
      }

      return location.pathname.includes(target)
    },
    [location],
  )

  return (
    <HeaderNav>
      <NavUL>
        {menu.map(item => (
          <NavList key={item.to}>
            <NavLink to={item.to} active={isActive(item.to).toString()}>
              {item.title}
            </NavLink>
          </NavList>
        ))}
      </NavUL>
    </HeaderNav>
  )
}

export default Navigation
