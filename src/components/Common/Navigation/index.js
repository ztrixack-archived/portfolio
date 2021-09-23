/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react'

import { NavLink, NavList } from './style'
import menu from './menu'

const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
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
    <nav tw="relative select-none lg:flex lg:items-stretch w-full absolute">
      <div tw="flex flex-shrink-0 items-stretch h-12">
        <Link
          to="/"
          tw="flex-grow-0 flex-shrink-0 relative p-8 leading-normal text-white no-underline flex items-center hover:text-blue-500"
        >
          Z
        </Link>
        <div tw="block lg:hidden ml-auto p-2">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} color="white" />
        </div>
      </div>
      {isOpen && (
        <div tw="lg:hidden lg:items-stretch lg:flex-shrink-0 lg:flex-grow">
          <div tw="lg:hidden lg:items-stretch lg:justify-end ml-auto">
            <NavList>
              {menu.map(item => (
                <NavLink key={item.to} to={item.to} active={isActive(item.to).toString()}>
                  {item.title}
                </NavLink>
              ))}
            </NavList>
          </div>
        </div>
      )}
      <div tw="hidden lg:flex lg:items-stretch lg:flex-shrink-0 lg:flex-grow">
        <div tw="hidden lg:flex lg:items-stretch lg:justify-end ml-auto">
          <NavList>
            {menu.map(item => (
              <NavLink key={item.to} to={item.to} active={isActive(item.to).toString()}>
                {item.title}
              </NavLink>
            ))}
          </NavList>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
