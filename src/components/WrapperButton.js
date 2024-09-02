import './WrapperButton.css'

export default function WrapperButton(props) {
  return (
    <button className='WrapperButton'> 
      {props.children}
    </button>
  )
}
