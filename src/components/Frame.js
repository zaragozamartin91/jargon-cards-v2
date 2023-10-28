import '../App.css'

export default function Frame(props) {
  const overflow = props.overflow || 'inherit'
  const style = {overflow}

  return (
    <div className="App" style={style} >
      <header className="App-header">
        {props.children}
      </header>
    </div>
  )
}