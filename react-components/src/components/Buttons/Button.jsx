// create a react Button component

const Button = (props) => {
  const {
    children,
    className,
    disabled,
    onClick,
    type,
    ...other
  } = props

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...other}
    >
      {children}
    </button>
  )
}

export default Button
