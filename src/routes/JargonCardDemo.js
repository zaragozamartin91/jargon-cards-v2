import Frame from '../components/Frame'
import FloatingFlashCard from '../components/FloatingFlashCard'

export default function JargonCardDemo(_props) {
  const swipeCallback = (swipeDirection) => {
    console.log(`Card swiped to the ${swipeDirection}`)
  }

  return (
    <Frame overflow={'hidden'}>
      <>
      <FloatingFlashCard
        swipeCallback={swipeCallback}
        word={'även om'}
        usage={'även om danserna har förändrats'}
        translation={'even though'}
        definition={''}
      />
      </>
    </Frame>
  )
}