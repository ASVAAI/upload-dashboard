import React, { useEffect, useState } from 'react'
import ParsePageHeader from '../components/ParsePage/ParsePageHeader'
import ParsePageSubHeader from '../components/ParsePage/ParsePageSubHeader'
import { useParams } from 'react-router-dom';
import conf from '../conf';
import axios from 'axios';


function ParseContentPage() {
  const [error, setError] = useState();
  const[data,setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  // console.log(params.id);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const getToken = localStorage.getItem("token");
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${conf.BackendUrl}/document/${params.id}`,
          headers: { 
            'Authorization': `Token ${getToken}`
          }
        };
        const response = await axios.request(config)
        if(response) {
          // console.log("RESPONSE:::",response)
          setData(response.data)
          // console.log("RESPONSE:::",response.data)
          setError('')
          // console.log("data fetched")
          // console.log(response.data)
        }
        
      } catch (error) {
        console.log("ERROR :: PasrePageContent :: ",error )
        setError(error.response?.data?.message || "An unexpected error occurred.")
        
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  },[params.id])
  return (
    <>
        <section className='bg-violet-50 max-w-full pb-10  font-titillium_web'>
          <div className='px-2 '>
            <div>
              <ParsePageHeader />
            </div>
            <div>
              
              {loading ? (
                <p>Loading...</p>
              ): error ? (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              ) : (
                <ParsePageSubHeader data={data} />
              )}
            </div>
          </div>
        </section>
    </>
  )
}

export default ParseContentPage;