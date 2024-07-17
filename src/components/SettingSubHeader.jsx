import React from 'react'
import { IconCaretLeftFilled } from '@tabler/icons-react';
import SettingContent from './SettingContent';
import { useNavigate } from 'react-router-dom';

function SettingSubHeader() {

    const navigate = useNavigate();
    
    const handleNavigate = () =>{
        navigate('/')
    }

  return (
    <section>
        <div className='bg-gray-200 rounded-lg '>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg border-b border-y-gray-300 '>
                <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                    <h3 className=''>Resume&apos;s</h3>
                    <h3>Job Description</h3>
                </div>
                <div className='flex text-base font-semibold cursor-pointer py-2 px-3 text-gray-400 bg-gray-50 rounded-lg hover:text-violet-500 hover:bg-violet-200 group' onClick={handleNavigate}><IconCaretLeftFilled className='text-gray-400 group-hover:text-violet-500 group-hover:bg-violet-200'/>BACK</div>
            </div>
            <div className='p-2'>
                <SettingContent/>
            </div>
        </div>
    </section>
  )
}

export default SettingSubHeader