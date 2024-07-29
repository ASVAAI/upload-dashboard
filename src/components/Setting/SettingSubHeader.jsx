import React from 'react'
import { IconCaretLeftFilled } from '@tabler/icons-react';
import SettingContent from './SettingContent';
import { useNavigate } from 'react-router-dom';

function SettingSubHeader() {

    const navigate = useNavigate();
    
    const handleNavigate = () =>{
        navigate('/app/upload')
    }

  return (
    <section className='pb-2'>
        <div className='bg-violet-00 rounded-lg border-2 border-violet-400 '>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg border-b border-y-violet-400 bg-violet-500 rounded-md '>
                <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                    <h3 className='text-white hover:text-violet-300 text-xl'>Resume&apos;s</h3>
                    <h3 className='text-white hover:text-violet-300 text-xl'>Job Description</h3>
                </div>
                <div className='flex text-base font-semibold cursor-pointer py-2 px-3 text-gray-100 bg-violet-500 rounded-full hover:text-violet-500 hover:bg-violet-100 group border border-violet-100' onClick={handleNavigate}><IconCaretLeftFilled className='text-gray-100 group-hover:text-violet-500 group-hover:bg-violet-100'/>BACK</div>
            </div>
            <div className='p-2'>
                <SettingContent/>
            </div>
        </div>
    </section>
  )
}

export default SettingSubHeader