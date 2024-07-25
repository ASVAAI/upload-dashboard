import React, { useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react';

import Loader from '../Loader';

function DeleteDialog({message,fileId, open, setOpen, onDelete }) {
    const[error,setError] = useState(null); 
    const [isLoading, setIsLoading] = useState(false)
    // const navigate = useNavigate();

    if(!open)return null;

    const handleDialogBox = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setOpen(!open);
    }

    const handleDelete = async(e)=>{
        e.stopPropagation();
        e.preventDefault();
        setIsLoading(true);

        try {
            await onDelete(fileId);
            setOpen(false);
        } catch (error) {
            setError("Failed to delete the file.");
        } finally {
            setIsLoading(false);
        }

        // try {
        //     const getToken = localStorage.getItem("token");

        //     const config = {
        //         method: 'delete',
        //         maxBodyLength: Infinity,
        //         url: `${conf.BackendUrl}/document/${fileId}`,
        //         headers: { 
        //           'Authorization': `Token ${getToken}`
        //         }
        //       };

        //       const response = await axios.request(config)

        //       if(response) {
        //         setOpen(!open);
        //         setError('');
        //         navigate('/')

        //       } else {
        //         setError("Failed to Delete the file...")
        //       }


        // } catch (error) {
        //     console.log("Error :: DELETE :: ",error)
        //     setError(error.response?.data?.message || "An unexpected error occurred.");
        // }
        // finally{
        //     setIsLoading(false);
        // }
    };

  return (
    <div>
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-md bg-transparent/5 '>
            <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl border-2 border-red-400'>
                <div className='box start px-4 '>
                    <div className='bg-red-100 h-20 w-20 p- flex justify-center items-center rounded-full'><IconAlertTriangle className='h-16 w-16 bg-red-300 p-3 rounded-full text-red-500/85   '/></div> 
                    <div className='text-2xl font-bold py-4 text-red-400'>Are you sure ?</div>                   
                    <div className='text-gray-400 py-2 max-w-80 '>You are about to delete file {message} - file id :{fileId}</div>
                    <div className='text-red-400 font-semibold py-4'>This action cannot be undone </div>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}                  
                    <div className='flex justify-between items-center gap-x-2 py-2'>
                    {isLoading && <Loader/>}
                        <button type='button' onClick={handleDialogBox} className='bg-gray-200 text-xl px-10 py-2 rounded-full hover:bg-blue-300' hidden = {isLoading}>Cancel</button>
                        <button type='button'  className='bg-red-300 text-xl px-10 py-2 rounded-full text-white hover:bg-red-400' disabled = {isLoading} onClick={handleDelete}>{isLoading ? 'Deleting...' : 'Delete'}</button>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteDialog