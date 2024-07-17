import React, {useId} from 'react'

const Input = React.forwardRef( function Input({type,placeholder, ...props},ref) {
    const id = useId()
  return (
    <div>
        <input type={type} placeholder={placeholder} ref={ref} id={id} {...props}
            className='peer h-full w-full rounded-[7px]  !border  border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5  text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-violet-400 focus:border-t-transparent focus:!border-t-violet-500 focus:outline-0 focus:ring-violet-200 disabled:border-0 disabled:bg-blue-gray-50'
        />
    </div>
  )
}
)

export default Input;