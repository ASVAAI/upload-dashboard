import React from 'react'

const UserSettingInput = React.forwardRef(function UserSettingInput({label, type, ...props},ref) {
  return (
    <div>
        <div className="">
            <div className="relative h-11 w-full min-w-[200px]">
                <input 
                type={type}
                ref={ref}
                {...props}
                className="peer h-full w-full border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-violet-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:text-gray-500 " />
                <label
                className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-base  leading-tight text-violet-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violet-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-violet-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-semibold ">
                {label}
                </label>
            </div>
        </div>
    </div>
  )
})

export default UserSettingInput