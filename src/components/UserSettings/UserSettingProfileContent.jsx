import React,{useEffect, useState} from 'react'
import UserSettingInput from './UserSettingInput'
import axios from 'axios'
import conf from '../../conf'
import  {useForm} from 'react-hook-form'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserSettingProfileContent({data, refetchData}) {
    // console.log(data)
    const [error, setError] = useState('');
    const {register, handleSubmit , formState:{errors},reset} = useForm({
        defaultValues: {
            first_name : data?.first_name || "",
            last_name : data?.last_name || "",
            email: data?.email || "",
        }
    });

    const submitUpdate = async (formData) => {

        // console.log(formData);        
        try {
            const payload = JSON.stringify(formData);

            const getToken = localStorage.getItem("token");

            const config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${conf.BackendUrl}/user`,
                headers: { 
                  'Authorization': `Token ${getToken}`,
                  'Content-Type': 'application/json'
                },
                data : payload
              };

              const response = await axios.request(config)

              if(response){
                // console.log(response)
                // console.log("success")

                refetchData();
                toast.success("Updated Successfully")
                
              }
    
        } catch (error) {
            console.log("Error :: updateUserSettings :: ", error)
            setError(error.response?.data?.message || "An unexpected error occurred.");
        }
    }

    useEffect(()=>{
        reset({
            first_name: data?.first_name || "",
            last_name: data?.last_name || "",
            email: data?.email || "",
        })
    },[data,reset])



  return (
    <section>
        <div className=''>
            <div className='py-4 mb-4'>
                <h1 className='text-violet-500 font-semibold text-xl'>Account</h1>
                <h1 className='text-gray-00 text-sm'>Manage your Account</h1>
            </div>
            <div>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(submitUpdate)}>
                    
                    <div className='grid gap-6 md:grid-cols-2'>
                    
                        <UserSettingInput 
                            label = "First Name"
                            type="text"
                            { ...register("first_name",{
                                required : "First name is required"
                            })} 
                         />

                        {errors.first_name && <p className="text-red-600 ">{errors.first_name.message}</p>}

                        <UserSettingInput 
                            label = "Last Name"
                            type="text"
                      
                            {...register("last_name", {
                                required: "Last name is required",
                            })}
                         />
                         {errors.last_name && <p className="text-red-600">{errors.last_name.message}</p>}

                        <UserSettingInput 
                            label = "Work e-mail"
                            type="email"
                          
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                         />

                         {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </div>

                    <div className='py-6'>
                        <button type="submit" className='bg-violet-500 text-white py-2 px-5 rounded-full hover:bg-white hover:text-violet-500 hover:border hover:border-violet-500'> 
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer/>
    </section>
  )
}

export default UserSettingProfileContent