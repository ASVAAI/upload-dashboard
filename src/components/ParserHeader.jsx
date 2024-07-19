import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import conf from '../conf';

function ParserHeader() {
  const navigate = useNavigate();
  
  const handleLogout = async() => {
      try {
        const getToken = localStorage.getItem("token")
        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${conf.BackendUrl}/logout`,
          headers: { 
          'Authorization': `Token ${getToken}`
          }
        };
        const response = await axios.request(config)
        // console.log(response)
        if(response){
          localStorage.removeItem("token")
          navigate('/signup')
        }
        // console.log("after removing token")

      } catch (error) {
        console.log("Error :: Logout :: ParseHeader ::", error)
        // setError(error.response?.data?.message || "An unexpected error occurred.");
      }
  }

  return (
    <section className='bg-gray-00 mb-2'>
        <div className='py-4  bg-gray-00'>
            <div className='text-3xl font-bold'>Parser</div>
            <div className='text-gray-500'>Upload up to 50 files</div>
            <button className='bg-blue-300 border-gray-500 border ' onClick={handleLogout}>Logout</button>
        </div>
    </section>
  )
}

export default ParserHeader