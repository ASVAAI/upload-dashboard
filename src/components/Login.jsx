import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Input ,Logo} from './index'
import  {set, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
                url: 'http://backend-dev-env.eba-y8shitmz.ap-south-1.elasticbeanstalk.com/login',
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
      <div>
        <div
            className='flex items-center justify-center w-full bg-gray-300 py-16'
            >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
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
                className="w-full bg-violet-500 hover:bg-violet-400 rounded h-full py-1 text-violet-50 text-xl font-semibold"
                >Login</button>
            </div>
        </form>
        </div>
        </div>
      </div>  
  )
}

export default Login