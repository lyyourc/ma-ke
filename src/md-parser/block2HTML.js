const block2HTML = ({
  type = '',
  attrs = {},
  children = []
}) => {
  const el = document.createElement(type)

  Object.keys(attrs).forEach(key => {
    el.setAttribute(key, attrs[key])
  })

  children.forEach(child => {
    if (typeof child === 'string')
      el.textContent = child

    else
      el.appendChild = block2HTML(child)
  })

  return el
}

export default block2HTML
