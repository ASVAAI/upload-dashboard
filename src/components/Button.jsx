

function Button({
    children,
    type = "button",
    bgColor = "bg-[#6322D8]",
    textColor = "text-[#F8FAFC]",
    className = "",
    ...props

}) {
  return (
    <button className={` ${bgColor} ${textColor} ${className} `} {...props}>
        {children}
    </button>
  )
}

export default Button