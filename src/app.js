import editor from './components/editor/'
import preview from './components/preview/'

const app = () => {
  const main = document.querySelector('main') || document.body
  const editorPanel = editor()
  const previewPanel = preview(editorPanel.firstElementChild.value)

  main.appendChild(editorPanel)
  main.appendChild(previewPanel)
}

export default app
