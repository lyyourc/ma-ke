import formatter from './formatter'

const getChildren = (type, matched) => {
  switch (type) {
    case 'img':
      return []

    default:
      return [
        matched[2]
      ]
  }
}

const getAttrs = (type, matched) => {
  switch (type) {
    case 'img':
      return {
        alt: matched[1],
        src: matched[2]
      }

    default:
      return {}
  }
}

const md2Block = (block) => {
  if (block == null) return

  let matched = null
  let format = null

  format = formatter.find(f => {
    matched = block.match(f.pattern)
    return matched != null
  })

  const type = (format == null)
    ? 'p'
    : (format.map.search(/^h\d?/) !== -1)
      ? format.map = 'h' + matched[1].length
      : format.map

  const children = (type === 'p')
    ? [block]
    : getChildren(type, matched)

  const attrs = getAttrs(type, matched)

  return {
    type,
    attrs,
    children
  }
}

export default md2Block
