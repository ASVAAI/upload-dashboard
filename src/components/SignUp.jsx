import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Input ,Logo} from './index'
import  {set, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [error, setError] = useState('');
    const {register, handleSubmit , formState:{errors}} = useForm();
    const navigate = useNavigate();
   
    const submitForm = async (formdata) => {

        try {
            
            const payload = JSON.stringify(formdata);
            
            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://backend-dev-env.eba-y8shitmz.ap-south-1.elasticbeanstalk.com/signup',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : payload
              };

            const response = await axios.request(config)
         

            if(response.status === 200){
                navigate('/login')
            }


            else if(response.status === 400){
                setError("minimum password should be of length with alpha numeric values")
                console.log("errror :: response :: ",response)
            }


          } catch (error) {
            console.log("Error :: signup::", error)
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
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(submitForm)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                placeholder="Your First Name"
                type="text"
                {...register("first_name", {
                    required: "First name is required"
                })}
                />
                {errors.first_name && <p className="text-red-600">{errors.first_name.message}</p>}

                <Input
                placeholder="Your Last Name"
                type="text"
                {...register("last_name", {
                    required: "Last name is required",
                })}
                />
                {errors.last_name && <p className="text-red-600">{errors.last_name.message}</p>}
                
                <Input
                placeholder="Enter Your Email"
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
                <Input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                    required: "Password is required",
                    minLength : {
                        value : 8,
                        message : "Password must be at least 8 characters long"
                    },
                    pattern : {
                        value : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message : "Password must contain 8 letters with numbers, and symbols"
                    }
                })}
                />

                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                <button
                type="submit"
                className="w-full bg-violet-500 hover:bg-violet-400 rounded h-full py-1 text-violet-50 text-xl font-semibold"
                >Sign In</button>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default SignUp