const formatter = [
  // heading
  {
    pattern: /^(#{1,6})(.*)/,
    map: 'h'
  },

  // blockquote
  {
    pattern: /(^> )(.*)/,
    map: 'blockquote'
  },

  // preformatted
  {
    pattern: /(^`{3})([\s\S]*)(`{3}$)/,
    map: 'pre'
  },

  // image
  {
    pattern: /^!(\[.*\])(\(.*\))/,
    map: 'img'
  },

  // paragraph
  {
    pattern: /(.*)/,
    map: 'p'
  }

]

export default formatter
