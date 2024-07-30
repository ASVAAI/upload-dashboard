import React, { useEffect, useState } from 'react'
import { IconCaretLeftFilled } from '@tabler/icons-react';
import { IconDownload } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import ParsePageContent from './ParsePageContent';

import ParsePageJson from './ParsePageJson';

import conf from '../../conf';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';




function ParsePageSubHeader({data}) {

    const params = useParams()
    console.log(params)
    
    // console.log(data)
    const[isOpenJSON,setOpenJSON] = useState(false);    const [error, setError] = useState('');


    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/app/upload')
    }

    const handleDownload = async(e)=> {
        e.stopPropagation();
        setError('')
        try {
            const getToken = localStorage.getItem("token");
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${conf.BackendUrl}/export/${params.id}`,
                headers: { 
                  'Authorization': `Token ${getToken}`
                },
                responseType: 'blob'
              };

              const response = await axios.request(config)

              if(response){
                let blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'resume.xlsx';
                link.click();
                toast.success("Downloaded Successfully")
              }


        } catch (error) {
            console.log("Errror :: downloadExcel :: ",error)
            setError(error.response?.data?.message || "An unexpected error occurred.");

        }
    }

    const handleOpenJSON = ()=>{
        setOpenJSON(!isOpenJSON)
    }



  return (
    <section>
        <div className='bg-gray-00 border-2 border-violet-400 rounded-lg '>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg border-b-2 border-y-violet-400 bg-violet-500 rounded-md'>
                <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                    <h3 className=' text-white hover:text-violet-300 text-xl' onClick={handleOpenJSON}>Overview</h3>
                    <h3 onClick={handleOpenJSON} className=' text-white hover:text-violet-300 text-xl'>JSON</h3>
                </div>
                <div className='flex flex-row  gap-x-2 sm:gap-x-8'>
                    <div className='flex text-base font-semibold cursor-pointer py-2 px-3 text-violet-500 bg-gray-50 rounded-lg hover:text-white hover:bg-violet-500 group border-2 border-violet-300 sm:hover:-translate-y-1  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300 ' onClick={handleDownload}><IconDownload className='text-violet-500 group-hover:text-white  '/></div>

                    <div className='flex text-base font-semibold cursor-pointer py-2 px-3 text-violet-500 bg-gray-50 rounded-lg hover:text-white hover:bg-violet-500 group border-2 border-violet-300 sm:hover:-translate-y-1  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300  ' onClick={handleNavigate}><IconCaretLeftFilled className='text-violet-500 group-hover:text-white  '/>BACK</div>
                </div>
            </div>
            {true && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <div className='p-2'>

                {
                    isOpenJSON ? (<ParsePageJson data = {data}/>): (
                        <ParsePageContent data= {data}/>
                    )
                }
            </div>
        </div>
        <ToastContainer/>
    </section>
  )
}

export default ParsePageSubHeader