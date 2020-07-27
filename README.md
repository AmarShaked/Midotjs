# Midot js

A quick and simple small library for converting between biblical and Talmudic units of measure.

[![<AmarShaked>](https://circleci.com/gh/AmarShaked/Midotjs.svg?style=shield)](https://app.circleci.com/pipelines/github/AmarShaked/Midotjs) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/midotjs)

---

## Installation

```sh
npm install midotjs
```

Or with Yarn:

```sh
yarn add midotjs
```

---

## Example

```javascript
import midot from 'midotjs';

midot(1).from('מיל').to('ריס'); //7.5
```

---

## Supported units of measure:

#### מידות אורך

- [x] אצבע
- [x] אגודל
- [x] טפח
- [x] סיט
- [x] זרת
- [x] אמה
- [x] גומד
- [x] ריס
- [x] מיל
- [x] פרסה

#### מידות נפח

- [x] קורטוב
- [x] כגרוגרת
- [x] כזית
- [ ] ככותבת
- [x] עוכלה
- [x] שמינית
- [x] כביצה
- [x] רביעית
- [x] פרס
- [x] ליטרא
- [x] לוג
- [ ] רובע
- [ ] רביעין ההין
- [x] קב
- [x] עומר
- [x] הין
- [x] סאה
- [x] איפה
- [x] לתך
- [x] כור
- [x] מקווה
