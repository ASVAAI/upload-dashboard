import React from 'react'

function ParsePageHeader() {
  return (
    <section className='bg-gray-00 mb-2'>
        <div className='py-4  bg-gray-00'>
            <div className='text-3xl font-bold'>Parse Page</div>
            <div className='text-gray-500'>Upload up to 50 files</div>
            {/* <button className='bg-blue-300 border-gray-500 border ' onClick={handleLogout}>Logout</button> */}
        </div>
    </section>
  )
}

export default ParsePageHeader