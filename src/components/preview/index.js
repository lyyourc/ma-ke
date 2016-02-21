import './preview.scss'
import md2HTML from '../../md-parser/md2HTML'

const preview = (
  mdText = ''
) => {
  const previewPanel = document.createElement('section')
  previewPanel.classList.add('preview')

  const html = md2HTML(mdText)
  previewPanel.innerHTML = html

  return previewPanel
}

export default preview
