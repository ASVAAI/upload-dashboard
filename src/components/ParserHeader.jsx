import React from 'react'
import ParserSubHeader from './ParserSubHeader'

function ParserHeader() {
  return (
    <section className='bg-gray-00 mb-2'>
        <div className='py-4  bg-gray-00'>
            <div className='text-3xl font-bold'>Parser</div>
            <div className='text-gray-500'>Upload up to 50 files</div>
        </div>
    </section>
  )
}

export default ParserHeader