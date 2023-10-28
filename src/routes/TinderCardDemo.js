import logo from '../logo.svg'

import React from 'react'
import TinderCard from 'react-tinder-card'
import ReactCardFlip from 'react-card-flip'
import Frame from '../components/Frame'

export default class TinderCardDemo extends React.Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('Handling click')
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }


  render() {
    const onSwipe = (direction) => {
      console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
      console.log(myIdentifier + ' left the screen')
    }

    return (
      <Frame>
        <TinderCard
          className="pressable"
          onClick={() => console.log("le click!")}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
          preventSwipe={['up', 'down']}
        // swipeThreshold={500}
        >

          <div onClick={this.handleClick}>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

              <div onClick={this.handleClick} style={{ backgroundColor: 'red' }}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is the FRONT side</p>
              </div>

              <div onClick={this.handleClick} style={{ backgroundColor: 'blue' }}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is the back side</p>
              </div>

            </ReactCardFlip>
            <button onClick={this.handleClick}>FLIP</button>
          </div>

        </TinderCard>
      </Frame>
    )
  }
}


