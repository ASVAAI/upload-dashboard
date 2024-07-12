
function ToggleBtn() {
  return (
    <label className=" relative flex items-center bg-teal-200  cursor-pointer  rounded-full w-14 h-7 group">
        <input type = "checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none peer"/>
        <span className="w-14 h-7 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-sm peer-checked:bg-[#6322D8] duration-300 ease-in-out after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1 "></span>
    </label>
    
  )
}

export default ToggleBtn