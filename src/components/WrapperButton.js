import './WrapperButton.css'


/**
 * A simple button component that adds a CSS class prefix to any extra CSS
 * classes passed in via the `qualifiers` prop.
 *
 * @param {{children: ReactNode, qualifiers?: string[]}} props
 * @returns {ReactElement} A button element with the given children and
 *         extra CSS classes.
 * @example
 * <WrapperButton>Click me</WrapperButton>
 * <WrapperButton qualifiers={['round']}>Click me</WrapperButton>
 * <WrapperButton qualifiers={['round', 'top', 'right']}>Click me</WrapperButton>
 */
export default function WrapperButton({ children, qualifiers = [] , customStyles = {} }) {
  const classNames = 'WrapperButton'
  const extraClasses = qualifiers
    .map((qualifier) => ` WrapperButton-${qualifier}`)
    .join(' ')

  return (
    <button className={classNames + extraClasses} style={customStyles}>
      {children}
    </button>
  )
}
