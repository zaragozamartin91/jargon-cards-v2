import Frame from "./Frame"
import './SparklyFrame.css'


// CSS Classes available
const shapes = ['sparkle', 'star']
const sizes = ['', 'medium', 'small']
const styles = ['', 'alt', 'alt2']
const animations = ['pulse', 'pulse-1', 'pulse-2', 'pulse-3']

function rand(min, max) {
  const boundary = max - min
  return Math.floor((Math.random() * boundary) + min)
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
  const style = { 
    top: `${rand(5, 95)}%`, 
    left: `${rand(5, 95)}%` 
  }

  return <div className={classes} style={style}></div>
}

export default function SparklyFrame(props) {
  const sparkleCount = props.sparkleCount || 30; // Number of stars & sparkles
  const sprakles = []

  // Random generating elements
  for (let i = 0; i < sparkleCount; i++) {
    const key = sparkleKey(i)
    const newSparkle = <Sparkle key={key}></Sparkle>
    sprakles.push(newSparkle)
  }

  const overflow = props.overflow || 'inherit'
  return (
    <Frame overflow={overflow}>
      {sprakles}
      {props.children}
    </Frame>
  )
}