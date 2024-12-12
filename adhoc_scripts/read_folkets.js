const convert = require('xml-js')
const fs = require('fs')
const escaper = require('html-escaper');

function unescape(string) {
    return string ? escaper.unescape(string) : string
}

function toArray(item) {
    if (item === undefined || item === null) return []
    return Array.isArray(item) ? item : [(item)]
}

// get file path from program arguments
const xmlFilePath = process.argv[2]

// get file path from program arguments
const destFilePath = process?.argv?.[3]

// read file
const xmlFile = fs.readFileSync(xmlFilePath, 'utf8')

// parse xml file as a json object
const jsonData = JSON.parse(convert.xml2json(xmlFile, { compact: true, spaces: 2 }))

const body = jsonData['dictionary']

/** @type{Array} */ const entries = body['word']


const parsedEntries = entries.map((entry, entryIndex) => {
    console.log(`entry = ${JSON.stringify(entry)}`)

    const word = entry?.['_attributes']?.['value']
    console.log(`word = ${word}`)

    // A word entry has a single definition
    const definition = entry?.['definition']?.['_attributes']?.['value']
    console.log(`definition = ${definition}`)

    const example = entry?.['example']?.['_attributes']?.['value']
    console.log(`example = ${example}`)

    // A word entry may have multiple translations
    const translationEntry = entry?.['translation']
    const translations = toArray(translationEntry).map(t => t?.['_attributes']?.['value']).map(t => unescape(t))
    console.log(`translations = ${translations}`)

    const definitionTranslation = unescape(entry?.['definition']?.['translation']?.['_attributes']?.['value'])
    console.log(`definitionTranslation = ${definitionTranslation}`)

    const exampleTranslation = unescape(entry?.['example']?.['translation']?.['_attributes']?.['value'])
    console.log(`exampleTranslation = ${(exampleTranslation)}`)

    // A word entry may have multiple synonyms
    const synonymEntry = entry?.['synonym']
    const synonyms = toArray(synonymEntry).map(t => t?.['_attributes']?.['value'])
    console.log(`synonyms = ${synonyms}`)

    return {
        i: entryIndex,
        w: word,
        d: definition,
        s: synonyms,
        e: example,
        t: translations,
        dt: definitionTranslation,
        et: exampleTranslation,
    }
})
console.log(`parsedEntries = ${JSON.stringify(parsedEntries)}`)

if (destFilePath) {
    fs.writeFileSync(destFilePath, JSON.stringify(parsedEntries))
}

// fs.copyFileSync('dictionaries/swe-eng.json', 'docs/swe-eng.json')

