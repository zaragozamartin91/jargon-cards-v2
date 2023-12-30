const convert = require('xml-js')
const fs = require('fs')

// read file
const xmlFile = fs.readFileSync('dictionaries/swe-eng-norm.tei', 'utf8')

// parse xml file as a json object
const jsonData = JSON.parse(convert.xml2json(xmlFile, { compact: true, spaces: 2 }))

const body = jsonData['TEI']['text']['body']

/** @type{Array} */ const entries = body['entry']
// console.log(`entries = ${JSON.stringify(entries)}`)

let entryIndex = 0
const parsedEntries = entries.map(entry => {
    console.log(`entry = ${JSON.stringify(entry)}`)

    const word = entry['form']['orth']['_text']
    console.log(`word = ${word}`)

    const sense = Array.isArray(entry['sense']) ? entry['sense'] : [(entry['sense'])]
    console.log(`sense = ${JSON.stringify(sense)}`)

    const cit = sense.flatMap(s => Array.isArray(s['cit']) ? s['cit'] : [(s['cit'])])
    console.log(`cit = ${JSON.stringify(cit)}`)


    const translations = cit.map(c => c['quote']['_text'])

    entryIndex++
    return { i: entryIndex, w: word , t: translations }
})
console.log(`parsedEntries = ${JSON.stringify(parsedEntries)}`)

fs.writeFileSync('dictionaries/swe-eng.json', JSON.stringify(parsedEntries))
fs.copyFileSync('dictionaries/swe-eng.json', 'docs/swe-eng.json')

