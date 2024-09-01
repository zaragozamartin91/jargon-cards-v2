import '../App.css'
import './SparklyFrame.css'


// CSS Classes available
const shapes = ['sparkle', 'star']
const sizes = ['', 'medium', 'small']
const styles = ['', 'alt', 'alt2']
const animations = ['pulse', 'pulse-1', 'pulse-2', 'pulse-3']

function rand(min, max) {
  return Math.floor((Math.random() * max) + min)
}

const NOW = Date.now()
function sparkleKey(suffix) {
  return `sparkly-frame-sparkle-${NOW}-${suffix}`
}

function Sparkle(_props) {
  // Random styles
  let classes = shapes[rand(0, shapes.length)] + " "
  classes += sizes[rand(0, sizes.length)] + " "
  classes += styles[rand(0, styles.length)] + " "
  classes += animations[rand(0, animations.length)]

  // Random position
  const style = { top: `${rand(0, 100)}%`, left: `${rand(0, 100)}%` }

  return <div className={classes} style={style}></div>
}

export default function SparklyFrame(props) {
  const sparkleCount = props.sparkleCount || 50; // Number of stars & sparkles
  const sprakles = []

  // Random generating elements
  for (let i = 0; i < sparkleCount; i++) {
    const key = sparkleKey(i)
    const newSparkle = <Sparkle key={key}></Sparkle>
    sprakles.push(newSparkle)
  }

  const overflow = props.overflow || 'inherit'
  return (
    <div className="App" style={{ overflow }} >
      <>
        {sprakles}
      </>
      <div className="App-header">
        {props.children}
      </div>
    </div>
  )
}