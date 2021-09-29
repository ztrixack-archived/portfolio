/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { Arrow } from './style'
import { FaArrowDown } from 'react-icons/fa'

const ArrowBounce = () => {
  const onClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <Arrow onClick={onClick}>
      <FaArrowDown size={32} color="#fff" />
    </Arrow>
  )
}

export default ArrowBounce
