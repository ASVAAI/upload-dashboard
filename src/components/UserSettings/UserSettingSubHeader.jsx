import React,{useState,useEffect} from 'react'
import axios from 'axios';
import conf from '../../conf';
import UserSettingProfileContent from './UserSettingProfileContent';

function UserSettingSubHeader() {
    const [error, setError] = useState('');
    const [data,setData] = useState([]);

    const fetchData = async()=>{
        try {

            const getToken = localStorage.getItem("token");
          const config = {
              method: 'get',
              maxBodyLength: Infinity,
              url: `${conf.BackendUrl}/user`,
              headers: { 
                'Authorization': `Token ${getToken}`
              }
            };

            const response = await axios.request(config)

            if(response) {
              // console.log("this is response",response);
              setData(response.data);
              setError('');
            } else {
              setError("Failed to get user Data...")
            }
            
        } catch (error) {
            console.log("Error :: UserProfile :: ",error)
            setError(error.response?.data?.message || "An unexpected error occurred.");
        }
    }

    useEffect( ()=> {
        fetchData();
    },[])

  return (
    <section>
    <div className='bg-gray-00 rounded-lg border-2 border-violet-400 '>
        <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg  border-b-2 border-y-violet-400 bg-violet-500 rounded-md '>
            <div className='flex text-base space-x-4 font-semibold cursor-pointer '>
                <h3 className='text-white hover:text-violet-300 text-xl'>Profile</h3>
                {/* <h3 className='text-white hover:text-violet-300 text-xl'>Job Description</h3> */}
            </div>

        </div>
       
        <div className='p-2'>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <UserSettingProfileContent data={data} refetchData = {fetchData} />

        </div>
    </div>
</section>
  )
}

export default UserSettingSubHeader