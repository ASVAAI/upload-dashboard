import React from 'react'

function Loader() {
  return (
    <div className=" flex w-full justify-center items-center ">
    <div className="relative">
        <div className="h-20 w-20 rounded-full border-t-8 border-b-8 border-violet-300"></div>
        <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-violet-500 animate-spin">
        </div>
    </div>
</div>
  )
}

export default Loader