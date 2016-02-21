import md2Block from './md2Block'
import block2HTML from './block2HTML'

const blockPattern = '\n\n' // maybe '\n'

const md2HTML = (mdText) => {
  const blocks = mdText.split(blockPattern)
  const parsedBlocks = blocks.map(md2Block)

  const nodes = parsedBlocks.map(block => {
    return block2HTML(block)
  })

  const htmls = nodes.reduce((prev, current) => {
    return prev + current.outerHTML
  }, '')

  return htmls
}

export default md2HTML
