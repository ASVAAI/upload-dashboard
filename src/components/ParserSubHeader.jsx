import React from 'react'
import Content from './Content'
import { IconSettingsFilled } from '@tabler/icons-react';

function ParserSubHeader() {
  return (
    <section>
        <div className='bg-gray-200 rounded-t-lg '>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-2xl border-b border-gray-300'>
                <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                    <h3 className=''>Resume&apos;s</h3>
                    <h3>Job Description</h3>
                </div>
                <div><IconSettingsFilled className='bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400 hover:text-violet-500 hover:bg-violet-200'/></div>
            </div>
            <div className='bg-green-400'>
                <Content/>
            </div>
        </div>
    </section>
  )
}

export default ParserSubHeader