import './editor.scss'

import INIT_EDITOR_CONTENT from '../../constants/INIT_EDITOR_CONTENT'
import preview from '../preview'

const textarea = (initText = '') => {
  const textarea = document.createElement('textarea')
  textarea.value = initText

  textarea.addEventListener('input', (e) => {
    const previewPanel = document.querySelector('.preview')
    previewPanel.parentNode.replaceChild(preview(e.target.value), previewPanel)
  }, false)

  return textarea
}

const editor = () => {
  const editorPanel = document.createElement('section')
  editorPanel.classList.add('editor')
  // editorPanel.setAttribute('contenteditable', true)

  editorPanel.appendChild(textarea(INIT_EDITOR_CONTENT))
  return editorPanel
}

export default editor
