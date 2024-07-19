import React from 'react'
import ParserContent from './ParserContent'
import { IconSettingsFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

function ParserSubHeader() {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/setting')
    }
  return (
    <section>
        <div className='bg-gray-200 rounded-lg '>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg border-b border-y-gray-300 '>
                <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                    <h3 className=''>Resume&apos;s</h3>
                    <h3>Job Description</h3>
                </div>
                <div onClick={handleNavigate}><IconSettingsFilled className='bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400 hover:text-violet-500 hover:bg-violet-200'/></div>
            </div>
            {/* nexted routes can come here */}
            <div className='p-2'>
                <ParserContent/>
            </div>
        </div>
    </section>
  )
}

export default ParserSubHeader