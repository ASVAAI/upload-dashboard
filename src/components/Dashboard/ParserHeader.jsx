import React from 'react'


function ParserHeader() {
  
  
  // const handleLogout = async(e) => {
  //   e.stopPropagation();
  //     try {
  //       const getToken = localStorage.getItem("token")
  //       const config = {
  //         method: 'post',
  //         maxBodyLength: Infinity,
  //         url: `${conf.BackendUrl}/logout`,
  //         headers: { 
  //         'Authorization': `Token ${getToken}`
  //         }
  //       };
  //       const response = await axios.request(config)
  //       // console.log(response)
  //       if(response){
  //         localStorage.removeItem("token")
  //         navigate('/signup')
  //       }
  //       // console.log("after removing token")

  //     } catch (error) {
  //       console.log("Error :: Logout :: ParseHeader ::", error)
  //       // setError(error.response?.data?.message || "An unexpected error occurred.");
  //     }
  // }

  return (
    <section className='bg-gray-00 mb-2'>
        <div className=' bg-gray-00 py-8 flex justify-between'>
            <div>
              <div className='text-4xl font-bold text-violet-500'>Parser</div>
              <div className='text-gray-500 font-semibold'>Upload up to 50 files</div>
            </div>
            {/* <button className='  font-semibold cursor-pointer py-2 px-8 text-gray-50 bg-violet-500 rounded-full hover:text-violet-400 hover:bg-violet-50  border-2 border-violet-300 sm:hover:-translate-y-1  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300 hover:tracking-wider' onClick={handleLogout} type='button'>Logout</button> */}
        </div>
    </section>
  )
}

export default ParserHeader