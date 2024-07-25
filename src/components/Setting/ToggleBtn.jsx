import { useState } from "react"
function ToggleBtn() {
  return (
    <label className=" relative flex items-center bg-teal-200  cursor-pointer rounded-full w-11 h-6 group">
        <input type = "checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full appearance-none peer"/>
        <span className="w-11 h-6 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-sm peer-checked:bg-violet-500 duration-300 ease-in-out after:duration-300 peer-checked:after:translate-x-5 "></span>
    </label>
  )
}

export default ToggleBtn