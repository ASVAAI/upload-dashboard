import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { set } from 'react-hook-form';

function UploadDialog({open, setOpen}) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    if (!open) return null;

    const handleDialogBox = (event) =>{
        event.stopPropagation();
        event.preventDefault();
        setOpen(false);
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = async(event) => {
        event.preventDefault(); 
        setError(null);
        setIsLoading(true);

        if(!file){
            setError('Please select a file')
            setIsLoading(false)
            return;
        }

        const formData = new FormData();
        formData.append('file',file);

        try {
            const getToken = localStorage.getItem("token")

            const response = await axios.post(
                'http://backend-env.eba-y8shitmz.ap-south-1.elasticbeanstalk.com/parse-cv',
                formData,
                {
                    headers: {
                        'Authorization':`Token ${getToken}`,
                        'Content-Type':'multipart/form-data',
                    }
                }
            );
            console.log(JSON.stringify(response.data));
            setOpen(false);
            navigate('/parsePage',{state:{responseData:response.data}});

        } catch (error) {
            console.error('Error uploading file:',error);
            setError(error.response?.data?.message || 'An error occured while uploading the file');
        }
        finally{
            setIsLoading(false);
        }
    };


  return (
    <div>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-300 z-10'>
            <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-10 rounded-xl '>

                <form className='box start px-4' onSubmit={handleSubmit}>
                    <div className='py-2  text-gray-400 text-xl max-w-80 '>Upload your file</div>
                    <div className='bg-gray-200 px-4 py-2 rounded-full my-4'>
                        <input 
                            type='file' 
                            name="file" 
                            accept='.pdf,.doc,.docx' 
                            onChange={handleFileChange}
                            className=' '
                            />
                    </div>
                    {error && <div className='text-red-500 mb-2'>{error}</div>}
                    <div className='flex justify-between items-center gap-x-2 py-2'>
                        <button 
                            type='button' 
                            className='bg-gray-200 text-xl px-10 py-2 rounded-full' 
                            onClick={handleDialogBox}>
                            Cancel
                        </button>
                        <button 
                            type='submit' 
                            className='bg-violet-400 text-xl px-10 py-2 rounded-full text-red-50'
                            disabled = {isLoading}
                            >
                            {isLoading ? 'Uploading...' : 'Submit'}
                            </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default UploadDialog