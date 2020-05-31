import emojiFromWord from 'emoji-from-word'

const arr = []
const each = arr.forEach
const slice = arr.slice

export function defaults (obj) {
  each.call(slice.call(arguments, 1), (source) => {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop]
      }
    }
  })
  return obj
}

export default {
  name: 'emoji',
  type: 'postProcessor',

  options: {
    wordSeparator: ' '
  },

  setOptions (options) {
    this.options = defaults(options, this.options || {})
  },

  process (value, key, options, translator) {
    const opt = this.options = defaults(options, this.options || {})
    const p = (value || key || '').split(opt.wordSeparator)

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
