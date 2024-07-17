import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ParserHeader() {
  const navigate = useNavigate();
  
  const handleLogout = async() => {
      try {
        // const config = {
        //   method: 'post',
        //   maxBodyLength: Infinity,
        //   url: 'http://backend-dev-env.eba-y8shitmz.ap-south-1.elasticbeanstalk.com/logout',
        //   headers: { 
        //     'Authorization': 'Token 176e821916dd6f1f084b76fb65c4d95c7737cd64'
        //   }
        // };
        // const response = await axios.request(config)
        // console.log(response)
        localStorage.removeItem("token")
        // console.log("after removing token")
        navigate('/signup')

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