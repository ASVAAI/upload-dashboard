import React from 'react'

function UploadDialog() {
  return (
    <div>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-300'>
            <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-10 rounded-xl '>
                <form className='box start px-4'>
                    <div className='py-2  text-gray-400 text-xl max-w-80 '>Upload your file</div>
                    <div className='bg-gray-200 px-4 py-2 rounded-full my-4'>
                        <input type='file' name="file" accept='file/pdf, file/docs' className=' '/>
                    </div>
                    <div></div>
                    <div className='flex justify-between items-center gap-x-2 py-2'>
                        <button className='bg-gray-200 text-xl px-10 py-2 rounded-full'>Cancel</button>
                        <button className='bg-violet-400 text-xl px-10 py-2 rounded-full text-red-50'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UploadDialog