import React, { useState } from 'react'
import { IconSearch } from '@tabler/icons-react';
function Search({onSearch}) {
    // const [filteredData,setFilterData] = useState([])
    const[query,setQuery] = useState('');

    // const handleFilter = (e)=>{
    //     const searchWord = e.target.value;
    //     const newFilter = data.filter((value)=>(
    //         value.fileName.toLowerCase().includes(searchWord.toLowerCase())));
        
    //     if(searchWord === ""){
    //         setFilterData([]);
    //     }else {
    //         setFilterData(newFilter);
    //     }   
    // }

    const handleChange = (e) =>{
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }
  return (
    <div className=' relative w-full text-gray-600'>
        <div className='flex border-gray-400 border rounded-full p-1'>
            <div className=''>
                <IconSearch/>
            </div>
            <div>
                <input className='bg-inherit' type='text' placeholder='Search' onChange={handleChange}/>
            </div>
        </div>
{/* 
        {filteredData.length !== 0 && (
            <div>
                {filteredData.map((item,index)=>(
                    <p key={index}>{item.fileName}</p>
                ))}
            </div>
        ) } */}
    </div>
  )
}

export default Search