import CardData from '../model/CardData';
import jsonData from '../data/swe-eng.json';
import FloatingFlashCardDeck from './FloatingFlashCardDeck';
import QueryParams from '../service/QueryParams';
import Sequence from '../model/Sequence';

// Reading JSON file: https://stackoverflow.com/questions/37649695/how-can-i-parse-through-local-json-file-in-react-js
const loadData = () => JSON.parse(JSON.stringify(jsonData)); // should this be moved to the io package?
/** @type{array} */ const loadedData = loadData()

/**
 * Sets up a floating flash card croupier
 * @param {{cardCount: number}} props 
 * @returns floating flash card croupier
 */
export default function FloatingFlashCardCroupier(props) {
  const cardCount = props.cardCount
  var sequence = Sequence.unique(loadedData.length)

  // Example of entry {"i":12,"w":"Brittannien","t":["Britain","Great Britain"]}
  const cardDataItems = sequence.apply(loadedData, cardCount).map(entry => {
    const { /*i , */ w = '', t = [] } = entry
    const word = w
    const usage = '' // TODO : Add usage somehow
    const translation = t[0]
    const synonyms = t.slice(1)
    const definition = synonyms.length > 0 ? `Synonyms: ${synonyms.join(' , ')}` : ''

    return { word, usage, translation, definition }
  })

  // map cardDataItems into cardData instances
  const deck = cardDataItems.map(item => new CardData(item))

  const queryParams = new QueryParams()
  console.log('queryParams: ', queryParams.searchParams)

  return (
    <FloatingFlashCardDeck deck={deck} />
  )
}
