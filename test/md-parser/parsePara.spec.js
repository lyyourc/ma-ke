import parsePara from '../../src/md-parser/parsePara'

describe('parse paragraph', () => {
  it('strong', () => {
    const str = 'I **love** you'

    expect(parsePara(str)).toBe('I <strong>love</strong> you')
  })

  it('em', () => {
    const str = 'I am *Drake Leung*, nice to meet you~'

    expect(parsePara(str)).toBe('I am <em>Drake Leung</em>, nice to meet you~')
  })

  it('inline code', () => {
    const str = '`42` is a magic number'

    expect(parsePara(str)).toBe('<code>42</code> is a magic number')
  })

  it('anchor', () => {
    const str = 'just [google](google.com) it'

    expect(parsePara(str)).toBe('just <a href="google.com">google</a> it')
  })
})
