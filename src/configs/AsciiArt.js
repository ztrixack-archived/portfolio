import { Fragment } from 'react'
import { generateUID } from './utils'

const getOffsetConponent = length => {
  if (length <= 0) return null
  return <span>{'\xa0'.repeat(length)}</span>
}

const toComponent = (index, { Component, content, offset, style = {} }) => {
  if (Array.isArray(content)) {
    return (
      <Fragment key={index}>
        {getOffsetConponent(offset)}
        <Component style={style}>{content.map(toComponent)}</Component>
      </Fragment>
    )
  }

  return (
    <Fragment key={index}>
      {getOffsetConponent(offset)}
      <Component key={index} style={style}>
        {(content + '').replaceAll(/ /g, '\xa0')}
      </Component>
    </Fragment>
  )
}

class AsciiArt {
  constructor() {
    this.content = []
  }

  getComponent() {
    return this.content.map((data, index) => toComponent(index, data))
  }

  save(data) {
    this.content.push(data)
  }

  clear() {
    this.content = []
    return this
  }
}

export default AsciiArt
