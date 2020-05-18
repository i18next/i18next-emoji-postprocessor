import expect from 'expect.js'
import i18next from 'i18next'
import postProcessor from '../lib/index.js'

describe('postProcessor', () => {
  before(() => {
    i18next
      .use(postProcessor)
      .init({
        lng: 'en',
        resources: {
          en: {
            translation: {
              key: 'Hello world!',
              key2: 'Lorem ipsum dolor sit amet'
            }
          }
        }
      })
  })

  describe('basic', () => {
    const tests = [
      { args: ['key', { postProcess: 'emoji' }], expected: '⭕ 🌐' },
      { args: ['key2', { postProcess: 'emoji' }], expected: '⭕ ©️ ⭕ 💺 Ⓜ️' },
      { args: ['no translation in resources', { postProcess: 'emoji' }], expected: '😣 🅰️ 😇 🇪🇸' },
      { args: ['key'], expected: 'Hello world!' }
    ]

    tests.forEach((test) => {
      it('correctly translates for ' + JSON.stringify(test.args) + ' args', () => {
        expect(i18next.t.apply(i18next, test.args)).to.eql(test.expected)
      })
    })
  })
})
