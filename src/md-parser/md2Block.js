import formatter from './formatter'

const getChildren = (type, matched) => {
  switch (type) {
    case 'img':
      return []

    case 'p': return [matched[0]]

    default:
      return [matched[2]]
  }
}

const getAttrs = (type, matched) => {
  switch (type) {
    case 'img':
      return {
        alt: matched[1].slice(1, -1),
        src: matched[2].slice(1, -1)
      }

    default:
      return {}
  }
}

const md2Block = (block) => {
  if (block == null) return

  let matched = null

  const format = formatter.find(f => {
    matched = block.match(f.pattern)
    return matched != null
  })

  // node(type, attrs, children)

  const type = format.map !== 'h'
    ? format.map
    : format.map += matched[1].length

  const children = getChildren(type, matched)

  const attrs = getAttrs(type, matched)

  return {
    type,
    attrs,
    children
  }
}

export default md2Block
