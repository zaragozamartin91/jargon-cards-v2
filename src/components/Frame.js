import '../App.css'

export default function Frame(props) {
  const overflow = props.overflow || 'inherit'
  const style = {overflow}

  return (
    <div className="App" style={style} >
      <div className="App-header">
        {props.children}
      </div>
    </div>
  )
}