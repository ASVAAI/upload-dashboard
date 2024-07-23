import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Input ,Logo} from './index'
import  {set, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import conf from '../conf'
import GoogleLogo from '../assets/GoogleLogo.svg'

function Login() {
    const [error, setError] = useState('');
    const {register, handleSubmit} = useForm("");
    const navigate = useNavigate();

    const submitForm = async (data) => {

        try {

            let payload = JSON.stringify(data);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url:`${conf.BackendUrl}/login`,
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : payload
              };

            const response = await axios.request(config);
          
            if(response.status === 200){
                const tokenValue = response.data.token;
                localStorage.setItem("token",tokenValue);
                navigate('/');
            } else {
                setError("Failed to login. Please check your credentials and try again.");
            }
            

          } catch (error) {
            console.log("Error :: Login :: ", error)
            setError(error.response?.data?.message || "An unexpected error occurred.");
          }
        
    }

  return (
      <div className='relative overflow-hidden'>
            <div className='absolute sm:top-1/2 sm:right-1/2 top-1/2 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-xl opacity-60  '></div>
            <div className='absolute top-1/3 right-1/4  w-64 h-64 bg-purple-400 rounded-full  filter blur-xl opacity-70 '></div>
            <div className='absolute top-20 right-1/2  w-72 h-72 bg-purple-400 rounded-full filter blur-xl opacity-60  '></div>
        <div
            className='flex items-center justify-center w-full bg-gray-300/20 py-16 relative min-h-screen'
            >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 drop-shadow-xl`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Start hiring with Asva AI</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(submitForm)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                placeholder="Enter Email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                    required: true,
                })}
                />
                <button
                type="submit"
                className="w-full bg-violet-500 hover:bg-violet-400 rounded h-full py-2 text-violet-50 text-xl font-semibold"
                >Login</button>
            </div>
        </form>
        <div className='flex mt-3 w-full bg-gray-300 hover:bg-gray-50 rounded h-full py-1 text-gray-400 text-xl font-semibold  drop-shadow-md justify-center items-center space-x-2 hover:text-'>
                    <img src={GoogleLogo} alt = 'asva logo' width="40" height="40"/>
                    <button type="button"
                    className="">Login with Google</button>
                </div>
        </div>
        </div>
      </div>  
  )
}

export default Login