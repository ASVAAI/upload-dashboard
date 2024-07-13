

function Button({
    children,
    type = "button",
    bgColor = "bg-[#6322D8]",
    textColor = "text-[#F8FAFC]",
    className = "",
    ...props

}) {
  return (
    <button className={` ${bgColor} ${textColor} ${className} h-10 px-3  rounded-full  `}  {...props}>
        {children}
    </button>
  )
}

export default Button



// hover:bg-gradient-to-br from-[#6322D8]  via-[#6322D8] via-[45%] to-[#FFF] hover:shadow-md hover:shadow-emerald-500 transition-colors duration-500 ease-linear