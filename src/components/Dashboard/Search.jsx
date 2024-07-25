import React, { useState } from 'react'
import { IconSearch } from '@tabler/icons-react';
function Search({onSearch}) {

    const[query,setQuery] = useState('');

    

    const handleChange = (e) =>{
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }
  return (
    <div className=' relative w-full text-white'>
        <div className='flex border-gray-100 border rounded-full p-1'>
            <div className=''>
                <IconSearch/>
            </div>
            <div>
                <input className='bg-inherit text-white !outline-none placeholder:text-violet-200 border-l border-white px-1' type='text' placeholder=' Search . . .' onChange={handleChange}/>
            </div>
        </div>
    </div>
  )
}

export default Search