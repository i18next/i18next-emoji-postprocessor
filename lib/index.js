import emojiFromWord from 'emoji-from-word'

export default {
  name: 'emoji',
  type: 'postProcessor',

  options: {
    wordSeparator: ' '
  },

  setOptions (options) {
    this.options = { ...this.options, ...options }
  },

  process (value, key, options, translator) {
    const opt = this.options = { ...this.options, ...options }
    const p = (value || key).split(opt.wordSeparator)

    return p.map((word) => {
      const ret = emojiFromWord(word)
      if (!ret || !ret.emoji || !ret.emoji.char) return emojiFromWord('question').emoji.char
      return ret.emoji.char
    }).join(opt.wordSeparator)
  },

  overloadTranslationOptionHandler (args) {
    return {
      postProcess: 'emoji'
    }
  }
}
