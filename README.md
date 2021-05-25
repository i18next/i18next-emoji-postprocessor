# Introduction

[![Actions](https://github.com/i18next/i18next-emoji-postprocessor/workflows/node/badge.svg)](https://github.com/i18next/i18next-emoji-postprocessor/actions?query=workflow%3Anode)
[![Travis](https://img.shields.io/travis/i18next/i18next-emoji-postprocessor/master.svg?style=flat-square)](https://travis-ci.org/i18next/i18next-emoji-postprocessor)
[![npm version](https://img.shields.io/npm/v/i18next-emoji-postprocessor.svg?style=flat-square)](https://www.npmjs.com/package/i18next-emoji-postprocessor)

This is a postProcessor plugin for i18next using in Node.js and in the browser that replaces all words with emojis.

**It's mainly used for fun!**

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-emoji-postprocessor) or [downloaded](https://github.com/i18next/i18next-emoji-postprocessor/blob/master/i18nextEmojiPostProcessor.min.js) from this repo.

```bash
# npm package
$ npm install i18next-emoji-postprocessor
```

Wiring up:

```js
import i18next from 'i18next';
import emoji from 'i18next-emoji-postprocessor';

i18next.use(emoji).init(i18nextOptions);
```

- If you don't use a module loader it will be added to `window.i18nextEmojiPostProcessor`

# usage sample

```js
// your normal resources
// translation: {
//   key: 'Hello world!'
// }

i18next.t('key', { postProcess: 'emoji' });
// --> '⭕ 🌐'
```

# Using global options

```js
import i18next from 'i18next';
import emoji from 'i18next-emoji-postprocessor';

i18next
  .use(emoji)
  .init({
    postProcess: 'emoji'
  });

// your normal resources
// translation: {
//   key: 'Hello world!'
// }

i18next.t('key');
// --> '⭕ 🌐'
```

--------------

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://locize.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>
