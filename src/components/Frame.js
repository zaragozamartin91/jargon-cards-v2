import '../App.css'

export default function Frame(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.children}
      </header>
    </div>
  )
}