import CardData from '../model/CardData';
import jsonData from '../data/swe-eng.json';
import FloatingFlashCardDeck from './FloatingFlashCardDeck';
import QueryParams from '../service/QueryParams';

// Reading JSON file: https://stackoverflow.com/questions/37649695/how-can-i-parse-through-local-json-file-in-react-js
const loadData = () => JSON.parse(JSON.stringify(jsonData));
const loadedData = loadData()

export default function FloatingFlashCardCroupier(_props) {
  console.log(loadedData[0])

  const cardDataItems = [
    {
      word: 'även om',
      usage: 'även om danserna har förändrats',
      translation: 'even though',
      definition: ''
    },
    {
      word: 'användarnamnet',
      usage: 'det här användarnamnet är fint',
      translation: 'username',
      definition: 'Name of user in computer program typically used for online authentication purposes'
    },
    {
      word: 'bevis',
      usage: '"Det finns inte mycket bevis för det, men det är ändå \ntroligt att man ville fira årets längsta dag, \noch att det hade med fruktbarhet att göra."',
      translation: 'evidence',
      definition: 'Information used to demonstrate a case during a trial.'
    }
  ]

  // map cardDataItems into cardData instances
  const cardData = cardDataItems.map(item => new CardData(item))

  const queryParams = new QueryParams()
  console.log('queryParams: ', queryParams.searchParams)

  return (
      <FloatingFlashCardDeck cardData={cardData} />
  )
}