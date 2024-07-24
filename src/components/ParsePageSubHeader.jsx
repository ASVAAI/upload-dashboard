import React, { useEffect, useState } from 'react'
import { IconCaretLeftFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import ParsePageContent from './ParsePageContent';
// import  {data} from './data'
import ParsePageJson from './ParsePageJson';




function ParsePageSubHeader({data}) {
    
    console.log(data)

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/')
    }

    const[isOpenJSON,setOpenJSON] = useState(false);

    const handleOpenJSON = ()=>{
        setOpenJSON(!isOpenJSON)
    }



    // useEffect(()=>{
    //     setData(data)
    // },[])
    // console.log(getData)

  return (
    <section>
        <div className='bg-gray-200 rounded-lg '>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg border-b border-y-gray-300 '>
                <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                    <h3 className='' onClick={handleOpenJSON}>Overview</h3>
                    <h3 onClick={handleOpenJSON}>JSON</h3>
                </div>
                <div className='flex text-base font-semibold cursor-pointer py-2 px-3 text-gray-400 bg-gray-50 rounded-lg hover:text-violet-500 hover:bg-violet-200 group' onClick={handleNavigate}><IconCaretLeftFilled className='text-gray-400 group-hover:text-violet-500 group-hover:bg-violet-200'/>BACK</div>
            </div>
            <div className='p-2'>

                {
                    isOpenJSON ? (<ParsePageJson data = {data}/>): (
                        <ParsePageContent data= {data}/>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default ParsePageSubHeader