import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Input from '../Input'
import Logo from '../Logo'
import  {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import conf from '../../conf'
import GoogleLogo from '../../assets/GoogleLogo.svg'

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
                url: `${conf.BackendUrl}/signup`,
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
    <div className='relative'>
            <div className='absolute sm:top-1/2 sm:right-1/2 top-1/2 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-xl opacity-60 '></div>
            <div className='absolute top-1/3 right-1/4  w-72 h-72 bg-purple-400 rounded-full  filter blur-xl opacity-70 '></div>
            <div className='absolute top-0 right-1/2  w-72 h-72 bg-purple-400 rounded-full filter blur-xl opacity-60  '></div>
        <div
            className='flex items-center justify-center w-full bg-gray-300/20 py-16 relative min-h-screen'>
            <div className={`mx-auto w-full max-w-lg bg-gray-50 rounded-xl p-10 border border-black/10 drop-shadow-xl`}>
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
                        className="font-medium text-primary transition-all duration-200 hover:underline">
                        Login
                    </Link>
                 </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(submitForm)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                placeholder="First Name*"
                type="text"
                {...register("first_name", {
                    required: "First name is required"
                })}
                />
                {errors.first_name && <p className="text-red-600">{errors.first_name.message}</p>}

                <Input
                placeholder="Last Name*"
                type="text"
                {...register("last_name", {
                    required: "Last name is required",
                })}
                />
                {errors.last_name && <p className="text-red-600">{errors.last_name.message}</p>}
                
                <Input
                placeholder="Work e-mail*"
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
                {...register("Password", {
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
                className="w-full bg-violet-500 hover:bg-violet-400 rounded h-full py-2 text-violet-50 text-xl font-semibold"
                >Sign In</button>
            </div>
                </form>

                <div className='flex mt-3 w-full bg-gray-50 hover:bg-gray-200 rounded h-full  text-gray-400 text-xl font-semibold  drop-shadow-md justify-center items-center space-x-2 hover:text-'>
                    <img src={GoogleLogo} alt = 'asva logo' width="40" height="40"/>
                    <button type="button"
                    className="">Sign in with Google</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp