import React, { useEffect, useState } from 'react'
import ParserContent from './ParserContent'
import { IconSettingsFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import conf from '../conf';

function ParserSubHeader() {
    const [error, setError] = useState('');
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/setting')
    }

    useEffect( ()=>{
        // console.log("fetching....")
        const fetchData = async()=>{
            try {
                const getToken = localStorage.getItem("token");
                const config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `${conf.BackendUrl}/dashboard`,
                    headers: { 
                      'Authorization': `Token ${getToken}`
                    }
                  };
    
                  const response = await axios.request(config)
    
                  if(response) {
                    // console.log("this is response",response);
                    // console.log("this is data",response.data);
                    setData(response.data.documents);
                    // console.log("this is data documnet",response.data.documents);
                    setError('');
                  } else {
                    setError("Failed to get user Data...")
                  }
    
    
            } catch (error) {
                console.log("Error :: dashboard :: ",error)
                setError(error.response?.data?.message || "An unexpected error occurred.");
            }
        };
        fetchData();
        // console.log("ending...")
    },[])
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
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <ParserContent data = {data}/>
            </div>
        </div>
    </section>
  )
}

export default ParserSubHeader