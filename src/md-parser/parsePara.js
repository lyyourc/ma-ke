const formatter = [
  // strong
  {
    pattern: /(\*{2})([^\*{2]*)(\*{2})/g,
    map: '<strong>$2</strong>'
  },

  // emphasize
  {
    pattern: /(\*{1})([^\*]*)(\*{1})/g,
    map: '<em>$2</em>'
  },

  // inline code
  {
    pattern: /`{1}([^`]*)`{1}/g,
    map: '<code>$1</code>'
  },

  // achor
  {
    pattern: /\[(.*)\]\((.*)\)/g,
    map: '<a href="$2">$1</a>'
  },

  // newline
  {
    pattern: /\n/g,
    map: '<br>'
  }
]

/**
 * parsePara: replace md with HTML tag
 *
 * @param {string} $paragraph [a paragraph text]
 * @return {string}
 */
const parsePara = (paragraph) =>
  formatter.reduce((prev, format) => {
    return prev.replace(format.pattern, format.map)
  }, paragraph)

export default parsePara
