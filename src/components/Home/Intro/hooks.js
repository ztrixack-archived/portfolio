/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

export const useYOffset = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [offset]
}
