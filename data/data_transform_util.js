const fs = require('fs')
const words = require('./words')

const addSearchForm = word => {
  const regexE = /ē/gi
  const searchForm = word.latin.replace(regexE, 'e')
  word.searchForm = searchForm
  return word
}

const newWords = words.map(addSearchForm)

fs.writeFileSync('new_words.json', JSON.stringify(newWords, null, 2), { encoding: 'utf8' })
