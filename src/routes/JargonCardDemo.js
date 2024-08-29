import FloatingFlashCardCroupier from "../components/FloatingFlashCardCroupier"
import Frame from "../components/Frame"

export default function JargonCardDemo(_props) {

  return (
    <>
      <Frame overflow={'hidden'}>

        <FloatingFlashCardCroupier 
          overflow={'hidden'} cardCount={10} 
        />

      </Frame>
    </>
  )
}