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
                    <h3 className='text-white hover:text-violet-300 text-xl'>Parser Settings</h3>
                    {/* <h3 className='text-white hover:text-violet-300 text-xl'>Job Description</h3> */}
                </div>
                <div className='flex text-base font-semibold cursor-pointer py-2 px-3 text-violet-500 bg-gray-50 rounded-lg hover:text-white hover:bg-violet-500 group border-2 border-violet-300 sm:hover:-translate-y-1  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300  ' onClick={handleNavigate}><IconCaretLeftFilled className='text-violet-500 group-hover:text-white  '/>BACK</div>
            </div>
            <div className='p-2'>
                <SettingContent/>
            </div>
        </div>
    </section>
  )
}

export default SettingSubHeader