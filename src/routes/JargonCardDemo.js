import logo from '../logo.svg'
import '../App.css'

import React from 'react'
import ReactCardFlip from 'react-card-flip'

export default class JargonCardDemo extends React.Component {
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
    return (
      <div className="App">
        <header className="App-header">
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div onClick={this.handleClick} style={{backgroundColor: 'red'}}>
              <img src={logo} className="App-logo" alt="logo" />
              <p>This is the FRONT side</p>
            </div>

            <div onClick={this.handleClick} style={{backgroundColor: 'blue'}}>
              <img src={logo} className="App-logo" alt="logo" />
              <p>This is the back side</p>
            </div>
          </ReactCardFlip>
        </header>
      </div>
    )
  }
}


